# PromoPower Website — Outstanding Tasks

Living list of items that require decisions or action outside of code. Update as items are resolved.

---

## 🔴 Required Before Go-Live

### 1. Web3Forms access key — forms not sending
- Contact Us and Jobseeker application forms are in **demo mode**. Submissions are not being delivered to any inbox.
- **Action**: Get a free access key at [web3forms.com](https://web3forms.com), then:
  1. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key` to `.env.local` for local testing.
  2. Set the same variable in the Cloudflare Workers environment (dashboard → Settings → Variables, or `wrangler secret put NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`).
  3. Redeploy (`npm run deploy`).

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

### 7. Google Analytics
- `NEXT_PUBLIC_GA_ID` is defined in `.env.example` but not set. No traffic data is being collected.
- **Action**: Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in the Cloudflare Workers environment and redeploy when ready.
