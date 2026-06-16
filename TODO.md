# PromoPower Website — Outstanding Tasks

Living list of items that require decisions or action outside of code. Update as items are resolved.

---

## Legal — Before Removing Draft Banners

The `/privacy` and `/terms` pages are currently published with **"Draft — Pending Legal Review"** banners. These items must be resolved before the banners are removed.

### 1. DPO appointment + contact details
- PDPA requires a designated Data Protection Officer (DPO) whose contact details are publicly accessible.
- The Privacy Policy currently lists the generic `admin@promopower.com.sg` as the DPO contact.
- **Action**: Appoint a named DPO (or a role mailbox like `dpo@promopower.com.sg`) and update Section 13 of [app/privacy/page.tsx](app/privacy/page.tsx) accordingly.

### 2. Legal review
- Both `/privacy` and `/terms` are unreviewed drafts authored to PDPA / Singapore-jurisdiction conventions.
- **Action**: Have counsel review both pages end-to-end. Once approved, remove the draft banner block from [app/privacy/page.tsx](app/privacy/page.tsx) and [app/terms/page.tsx](app/terms/page.tsx).

### 3. Retire the old WordPress Privacy Policy PDF
- Forms now point to the first-party `/privacy` page. The old PDF at `https://promopower.com.sg/wp-content/uploads/2020/05/PROMOPOWER-PTE-LTD-DATA-PROTECTION-POLICY-...-25-OCT-2019-.pdf` is no longer referenced from the new site.
- **Risk**: After DNS cutover, the legacy URL may still be indexed or linked externally, creating ambiguity about which policy is current.
- **Action (after `/privacy` is approved)**: Either (a) 301 redirect the legacy PDF URL to `/privacy`, or (b) remove the PDF from the old WordPress install entirely.

---

## Other Placeholder Data to Replace Before Final Launch

- **Phone number** in [lib/site.ts](lib/site.ts) is `+65 6123 4567` (placeholder). Replace with the live PromoPower main line.
- **Leadership cards** in the About Us page use "Name to be confirmed". Replace with named leadership once approved.
