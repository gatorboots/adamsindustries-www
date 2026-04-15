/**
 * Adams Industries contact form — Google Apps Script backend.
 *
 * Receives POSTs from the Hugo contact form, verifies Cloudflare Turnstile,
 * applies honeypot + time-to-submit + origin checks, and appends a row to the
 * configured Google Sheet. Also emails the row to info@adamsindustriesllc.com.
 *
 * Deploy:
 *   1. Create a Google Sheet. Copy its ID from the URL.
 *   2. Open script.google.com → New project → paste this file.
 *   3. In Project Settings → Script properties, add:
 *        SHEET_ID             — the Sheet ID from step 1
 *        TURNSTILE_SECRET     — from Cloudflare Turnstile
 *        NOTIFY_EMAIL         — where to email submissions (optional)
 *        ALLOWED_ORIGIN       — e.g. https://gatorboots.github.io
 *   4. Deploy → New deployment → type "Web app" →
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the /exec URL — that's your formEndpoint in hugo.toml.
 */

var HEADERS = [
  'Timestamp', 'Name', 'Phone', 'Email', 'Address', 'Service',
  'Message', 'ElapsedMs', 'PageUrl', 'UserAgent', 'IP', 'TurnstileAction'
];

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var out = function (code, body) {
    return ContentService
      .createTextOutput(JSON.stringify(body))
      .setMimeType(ContentService.MimeType.JSON);
  };

  try {
    var data = JSON.parse(e.postData.contents || '{}');

    // 1. Honeypot — if the hidden `website` field came through non-empty, drop.
    //    Client already silently succeeds, but double-check here.
    if (data.honeypot && String(data.honeypot).trim() !== '') {
      return out(200, { ok: true }); // pretend success
    }

    // 2. Time-to-submit — reject if under 2 seconds.
    if (!data.elapsedMs || data.elapsedMs < 2000) {
      return out(200, { ok: false, error: 'Please try again.' });
    }

    // 3. Required fields.
    if (!data.name || !data.phone || !data.service) {
      return out(200, { ok: false, error: 'Missing required fields.' });
    }

    // 4. Cloudflare Turnstile verification.
    var secret = props.getProperty('TURNSTILE_SECRET');
    if (secret) {
      var verifyRes = UrlFetchApp.fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'post',
          payload: { secret: secret, response: data.turnstileToken || '' },
          muteHttpExceptions: true
        }
      );
      var verify = JSON.parse(verifyRes.getContentText() || '{}');
      if (!verify.success) {
        return out(200, { ok: false, error: 'Verification failed. Please try again.' });
      }
    }

    // 5. Append to Sheet.
    var sheetId = props.getProperty('SHEET_ID');
    if (!sheetId) {
      return out(200, { ok: false, error: 'Server misconfigured (SHEET_ID).' });
    }
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }
    sheet.appendRow([
      new Date(),
      data.name, data.phone, data.email || '', data.address || '',
      data.service, data.message || '',
      data.elapsedMs, data.pageUrl || '', data.userAgent || '',
      '', ''
    ]);

    // 6. Email notify (optional).
    var notify = props.getProperty('NOTIFY_EMAIL');
    if (notify) {
      MailApp.sendEmail({
        to: notify,
        subject: 'New inquiry: ' + data.name + ' — ' + data.service,
        body:
          'Name:    ' + data.name + '\n' +
          'Phone:   ' + data.phone + '\n' +
          'Email:   ' + (data.email || '') + '\n' +
          'Address: ' + (data.address || '') + '\n' +
          'Service: ' + data.service + '\n\n' +
          'Message:\n' + (data.message || '') + '\n\n' +
          'Page:    ' + (data.pageUrl || '')
      });
    }

    return out(200, { ok: true });
  } catch (err) {
    return out(200, { ok: false, error: 'Server error.' });
  }
}

function doGet() {
  return ContentService.createTextOutput('Adams Industries form endpoint.');
}
