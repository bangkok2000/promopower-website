# PromoPower Website — Outstanding Tasks

Living list of items that require decisions or action outside of code. Update as items are resolved.

---

## 🔴 Required Before Go-Live

### 1. Handover and form delivery

Do this from [ownershiptransfer.md](ownershiptransfer.md), section **Approved handover plan**. Do not deploy the approved site onto the personal Cloudflare account, and do not tell the agency to upload the repo into WordPress.

Forms post to `/api/contact` and `/api/jobseekers` on the Worker and are saved to the admin portal Inbox. Email is off until a MailChannels account, a `MAILCHANNELS_API_KEY` Worker secret and two DNS records exist. See **Admin portal** and step 3 in [ownershiptransfer.md](ownershiptransfer.md).

### 2. Leadership cards — names not confirmed

- Four cards on the About Us page currently display **"Name to be confirmed"**.
- **Action**: Provide real names, roles and approved bios (see [content/leadership-profile-template.md](content/leadership-profile-template.md)). Update [components/AboutUsContent.tsx](components/AboutUsContent.tsx) — the `leadership` array. **Khing Koh draft** is sourced from public LinkedIn — she should approve wording before treating as final.

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
