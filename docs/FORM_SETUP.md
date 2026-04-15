# Contact form setup — Google Sheets + Cloudflare Turnstile

The Hugo contact form posts submissions to a Google Apps Script web app, which
verifies a Cloudflare Turnstile token, runs honeypot / time-to-submit checks,
and appends rows to a Google Sheet (with optional email notify).

Nothing on the site will submit until you complete the three setup steps below
and fill in two values in `hugo.toml`.

---

## 1. Google Sheet + Apps Script (the destination)

1. Create a new Google Sheet. Copy the Sheet ID from its URL
   (the long string between `/d/` and `/edit`).
2. Go to https://script.google.com and create a new project. Name it
   "Adams Industries — Inquiry Form".
3. Replace the default code with the contents of `docs/apps-script.gs`.
4. In the left sidebar, open **Project Settings** (gear icon) → scroll to
   **Script Properties** → add these keys:

   | Key                  | Value                                                        |
   |----------------------|--------------------------------------------------------------|
   | `SHEET_ID`           | The Sheet ID from step 1.                                    |
   | `TURNSTILE_SECRET`   | Your Cloudflare Turnstile **secret key** (from step 2 below).|
   | `NOTIFY_EMAIL`       | Where to email submissions (optional, e.g. info@adamsindustriesllc.com). |
   | `ALLOWED_ORIGIN`     | `https://gatorboots.github.io` (optional, for reference).    |

5. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click Deploy, grant the requested permissions (Sheets + Mail).
6. Copy the **Web app URL** (ends in `/exec`). That's your form endpoint.

> **If you update the script** and want the change live, use
> **Deploy → Manage deployments → edit the existing one → new version**.
> New deployments give you a new URL and you'd have to update `hugo.toml`.

---

## 2. Cloudflare Turnstile (the captcha)

1. Sign in at https://dash.cloudflare.com (free account works).
2. Go to **Turnstile** in the sidebar → **Add site**.
3. Site name: `adamsindustries-www`
   Hostnames: `gatorboots.github.io` (and your custom domain later, when you add it)
   Widget mode: **Managed** (recommended — shows only when suspicious)
4. Save. Copy the **site key** (public) and **secret key** (private).
5. Paste the secret into the Apps Script property `TURNSTILE_SECRET` (step 1.4 above).

---

## 3. Wire it into the site

Edit `hugo.toml` under `[params]` and fill in:

```toml
formEndpoint     = "https://script.google.com/.../exec"  # from step 1.6
turnstileSiteKey = "0x4AAA..."                             # from step 2.4
```

Commit and push. GitHub Actions will rebuild and the form will start working.

---

## Anti-spam layers (what's protecting you)

1. **Honeypot** — a hidden `website` field. Humans never see it; bots that
   auto-fill every field will populate it, and the backend silently drops them.
2. **Time-to-submit check** — submissions faster than 2 seconds get rejected
   ("Hold on a moment and try again"). Bots typically submit instantly.
3. **Cloudflare Turnstile** — the managed-mode widget usually stays invisible
   for real users; suspicious visitors get a quick interactive challenge.
4. **Required-fields validation** — name, phone, and service must be present.

All three are enforced both client-side (for UX) and server-side in the
Apps Script (authoritative). Turning one off is fine if it causes friction;
leave the other two on.

---

## Testing

After deploying, visit `/contact/` on the live site and submit a test entry.
Expected behavior:

- Turnstile widget renders in the form (may be invisible for known-good visitors).
- On success, status text shows "Thanks. We will be in touch." and form resets.
- A new row appears in your Google Sheet within a second or two.
- If `NOTIFY_EMAIL` is set, an email arrives at that address.

If a submission fails, check:

- Apps Script deployment is set to **Anyone** access (not "Anyone with Google
  account").
- Script properties are spelled exactly as listed above.
- Browser console for CORS errors — if you see one, confirm the form is POSTing
  with `Content-Type: text/plain` (the site code does this to avoid the CORS
  preflight Apps Script can't answer).
