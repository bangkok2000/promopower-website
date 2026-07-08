# PromoPower Website — Outstanding Tasks

Living list of items that require decisions or action outside of code. Update as items are resolved.

---

## 🔴 Required Before Go-Live

### 1. Form delivery — Cloudflare Worker + MailChannels

Forms use first-party API routes (`/api/contact`, `/api/jobseekers`) on the same Cloudflare Worker as the static site. **No Web3Forms.**

**Current state (no domain access):** Demo mode — forms validate and show success, but no email is sent until secrets and DNS are configured.

**When PromoPower has access to `promopower.com.sg` DNS:**

1. Set the recipient inbox (Worker secret):
   ```bash
   wrangler secret put FORM_RECIPIENT_EMAIL
   # e.g. admin@promopower.com.sg
   ```

2. Add MailChannels DNS on `promopower.com.sg` (required for `noreply@promopower.com.sg` to send):
   - **SPF TXT** on `@`:
     ```
     v=spf1 include:relay.mailchannels.net ~all
     ```
   - **Domain lockdown TXT** on `_mailchannels.promopower.com.sg`:
     ```
     v=mc1 cfid=<your-cloudflare-account-id>
     ```
     (Account ID is in `wrangler.toml`.)

3. Point `promopower.com.sg` DNS to this Cloudflare Worker (custom domain in Workers dashboard).

4. Enable live forms in the **build** environment:
   ```
   NEXT_PUBLIC_FORMS_LIVE=true
   ```
   Then redeploy: `npm run deploy`

5. Submit a test enquiry and jobseeker application on production; confirm email arrives with attachment.

**Optional secrets:**
- `FORM_FORCE_DEMO=true` — keep demo responses even when `FORM_RECIPIENT_EMAIL` is set (staging).
- Override sender in `wrangler.toml` `[vars]` — `FORM_FROM_EMAIL`, `FORM_FROM_NAME`.

### 2. Leadership cards — names not confirmed

- Four cards on the About Us page currently display **"Name to be confirmed"**.
- **Action**: Provide real names, roles and optionally short bios. Update [components/AboutUsContent.tsx](components/AboutUsContent.tsx) — the `leadership` array at the top of the file.

---

## 🟡 Required Before Removing Draft Banners

The `/privacy` and `/terms` pages are published with a **"Draft — Pending Legal Review"** banner visible to the public.

### 3. DPO appointment + contact details

- PDPA requires a designated Data Protection Officer (DPO) whose contact details are publicly accessible.
- The Privacy Policy currently lists `admin@promopower.com.sg` as the DPO contact.
- **Action**: Appoint a named DPO (or a dedicated mailbox such as `dpo@promopower.com.sg`) and update Section 13 of [app/privacy/page.tsx](app/privacy/page.tsx).

### 4. Legal review of Privacy Policy and Terms of Use

- Both documents are unreviewed drafts authored to PDPA / Singapore-jurisdiction conventions.
- **Action**: Have counsel review both pages. Once approved, remove the draft banner block from [app/privacy/page.tsx](app/privacy/page.tsx) and [app/terms/page.tsx](app/terms/page.tsx).

### 5. Retire the old WordPress Privacy Policy PDF (after DNS cutover)

- The legacy PDF at `https://promopower.com.sg/wp-content/uploads/2020/05/PROMOPOWER-PTE-LTD-DATA-PROTECTION-POLICY-...-25-OCT-2019-.pdf` may remain indexed or linked externally.
- **Action**: Either (a) 301 redirect the legacy PDF URL to `/privacy`, or (b) remove the PDF from the WordPress install after the new policy is approved.

---

## 🔵 Nice to Have

### 6. Phone number

- No phone number is published on the site. If one becomes available, add it to [lib/site.ts](lib/site.ts) (`phone` and `phoneTel` fields) — it will automatically appear in the Footer, Contact Us, Privacy, and Terms pages.

### 7. Mailing list (future)

- Not in scope for current forms. When needed, plan subscriber storage (D1/Postgres) + consent/unsubscribe before sending documents.
