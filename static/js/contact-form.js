(function () {
  var form = document.getElementById('inquire-form');
  if (!form) return;

  var status = document.getElementById('inquire-status');
  var submitBtn = document.getElementById('inquire-submit');
  var endpoint = window.__ADAMS_FORM_ENDPOINT;
  var loadedAt = Date.now();

  function say(msg, kind) {
    status.textContent = msg;
    status.style.color = kind === 'error' ? '#b00020' : (kind === 'ok' ? '#1e7a3a' : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!endpoint) {
      say('Form endpoint is not configured. Please call the number above.', 'error');
      return;
    }

    // Time-to-submit check — humans take longer than 2 seconds
    var elapsed = Date.now() - loadedAt;
    if (elapsed < 2000) {
      say("Hold on a moment and try again.", 'error');
      return;
    }

    // Honeypot — if filled, silently "succeed" without sending
    var honeypot = (form.website && form.website.value) || '';
    if (honeypot.trim() !== '') {
      say('Thanks. We will be in touch.', 'ok');
      form.reset();
      return;
    }

    // Turnstile token (if Turnstile is on the page)
    var tsToken = '';
    var tsField = form.querySelector('[name="cf-turnstile-response"]');
    if (tsField) tsToken = tsField.value || '';
    if (form.querySelector('.cf-turnstile') && !tsToken) {
      say('Please complete the verification checkbox.', 'error');
      return;
    }

    // Basic required-field check
    if (!form.name.value.trim() || !form.phone.value.trim() || !form.service.value) {
      say('Please fill in name, phone, and type of work.', 'error');
      return;
    }

    var payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      address: form.address.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
      elapsedMs: elapsed,
      turnstileToken: tsToken,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    };

    submitBtn.disabled = true;
    say('Sending…');

    // Apps Script web apps accept text/plain without triggering a CORS preflight.
    fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
      .then(function (data) {
        if (data && data.ok) {
          say('Thanks. We will be in touch.', 'ok');
          form.reset();
          if (window.turnstile && tsField) { try { window.turnstile.reset(); } catch (e) {} }
          loadedAt = Date.now();
        } else {
          say((data && data.error) || 'Could not send. Please call instead.', 'error');
        }
      })
      .catch(function () {
        say('Network trouble. Please call instead.', 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });
})();
