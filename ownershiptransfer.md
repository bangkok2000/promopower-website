# PromoPower Website — Ownership Transfer Guide

Follow **Approved handover plan** below once the design is signed off. Parts 1–7 are the detailed checklists. Where they disagree with that plan, the plan wins.

The live preview is on the developer’s personal Cloudflare account. Giving the agency the preview link does not give them that account. The agency’s current host is WordPress on Apache (`sgcloudhosting`). They cannot take this project over by uploading the repo or a zip into WordPress.

---

## Approved handover plan

Decided 28 October 2026. After approval, nothing for this site should remain on the developer’s personal Cloudflare account or require the developer’s login.

### What stays where it is

Measured on the live domain:

| Record | Current value | Action |
|--------|----------------|--------|
| Website | WordPress on Apache, `103.7.8.5` | Replaced only when DNS for the website names is switched |
| Nameservers | `ns811.sgcloudhosting.com`, `ns812.sgcloudhosting.com` | Leave with the agency. Do not move the whole zone onto the developer’s personal Cloudflare account |
| MX | `mail.promopower.com.sg` | Do not change |
| `mail` A record | `103.7.8.5` | Do not change |
| DKIM | `default._domainkey` | Do not change |
| SPF | `v=spf1 ip4:103.7.8.5 ip4:103.7.8.53 include:se.mschosting.com -all` | Replace with the merged record below. Do not use a MailChannels-only SPF |
| Contact form today | WordPress Contact Form 7 posts to `/contact-us/` | Stops being the public form after cutover. Their server may keep sending mail for other uses |
| Public inbox | `admin@promopower.com.sg` | Form recipient |

The new site sends form mail with MailChannels, from `noreply@promopower.com.sg` to `admin@promopower.com.sg`. MailChannels is not in the current SPF record, and there is no `_mailchannels` TXT record, so those messages fail until the agency adds the two DNS records below. The domain-lock value must be the **new** Cloudflare account ID, not `b8913fb4c5f8fe17d60ce0f824cdd1aa`.

### 1. New Cloudflare account for the agency

Create an account that is not `mohmadnoorariffin@protonmail.com`. Use an email the agency will own. Deploy this repo there (`npm run deploy`) after setting `account_id` in `wrangler.toml` to that new account. Set `FORM_RECIPIENT_EMAIL` to `admin@promopower.com.sg`.

Add the agency as a **Super Administrator**. When their deployment is serving `promopower.com.sg` and a test enquiry has arrived, remove the developer’s user from that account. Cloudflare will not delete the account. Removing the developer is what ends the developer’s access. Revoke any API token the developer created for that account.

### 2. GitHub

Transfer `https://github.com/bangkok2000/promopower-website` from `bangkok2000` to a GitHub user or organisation the agency controls. See Part 1. The code on `main` at commit `d6f1355` (28 October 2026) matches the preview. Later commits must be pushed before transfer if the design changes again.

### 3. DNS the agency applies

Leave MX, the `mail` A record, and DKIM as they are.

Replace the SPF TXT on `@` with:

```text
v=spf1 ip4:103.7.8.5 ip4:103.7.8.53 include:se.mschosting.com include:relay.mailchannels.net ~all
```

Add a TXT record on `_mailchannels.promopower.com.sg`:

```text
v=mc1 cfid=<NEW_CLOUDFLARE_ACCOUNT_ID>
```

Point only the website names (`promopower.com.sg` and `www`) at the **new** account’s Worker. Do not point them at `promopower-website.mohmadnoorariffin.workers.dev`.

### 4. Close the personal account copy

After the new site answers on `promopower.com.sg` and mail delivery is confirmed:

- Delete the `promopower-website` Worker on the personal account (`b8913fb4c5f8fe17d60ce0f824cdd1aa`). The `workers.dev` preview then stops.
- Revoke the personal Cloudflare API token used to deploy.
- Confirm the developer is no longer a member of the new account and no longer an admin on the GitHub repo.

### What not to send the agency

- The developer’s Cloudflare login or API token.
- A zip of the `out/` folder or the repo as something to upload into WordPress. The forms call `/api/contact` and `/api/jobseekers` on the Worker. Those routes do not exist on their Apache host.

---

## Current project state (developer environment)

Fill in or verify these values at handover time.

| Item | Current value |
|------|----------------|
| GitHub repository | `https://github.com/bangkok2000/promopower-website` |
| GitHub owner (transfer from) | `bangkok2000` |
| Cloudflare Worker name | `promopower-website` |
| Cloudflare account ID (developer) | `b8913fb4c5f8fe17d60ce0f824cdd1aa` |
| Preview URL (developer Worker) | `https://promopower-website.mohmadnoorariffin.workers.dev` |
| Production domain (target) | `https://promopower.com.sg` |
| Deploy command | `npm run deploy` |
| Stack | Next.js static export + Cloudflare Worker (forms API) |

**New owner details (complete before transfer):**

| Item | New owner value |
|------|-----------------|
| GitHub org or user (transfer to) | _____________________________ |
| New repository URL (after transfer) | _____________________________ |
| Cloudflare account email | _____________________________ |
| Cloudflare account ID (new) | _____________________________ |
| Form recipient inbox | _____________________________ (e.g. `admin@promopower.com.sg`) |
| Domain registrar login holder | _____________________________ |

---

## Prerequisites before transfer

Complete these on the developer side **before** starting ownership transfer:

- [ ] Design and content signed off by PromoPower  
- [ ] All changes merged to `main`  
- [ ] No secrets committed to Git (only `.env.example` — never `.env.local`)  
- [ ] `npm run build` passes  
- [ ] `npm run lint` passes  
- [ ] Preview site reviewed on `*.workers.dev`  
- [ ] `TODO.md` outstanding items reviewed with owner (legal, leadership names, etc.)  
- [ ] Tag a release, e.g. `v1.0.0-handover`  

---

## Part 1 — GitHub repository transfer

You will transfer the **full repository** (code, history, branches) from your GitHub account to the new owner’s GitHub account or organisation.

### Step 1 — New owner prepares GitHub

1. Create a GitHub **organisation** (recommended) or user account for PromoPower, e.g. `promopower-sg`.  
2. Nominate at least one **admin** who will manage the repo after transfer.  
3. Confirm the org name matches where the repo should live.

### Step 2 — Developer initiates transfer

1. Open `https://github.com/bangkok2000/promopower-website`  
2. Go to **Settings → General**  
3. Scroll to **Danger Zone → Transfer ownership**  
4. Enter the new owner’s GitHub org or username: _____________________________  
5. Confirm the transfer  

GitHub sends an acceptance email/link to the new owner. The transfer completes only after they accept.

### Step 3 — New owner accepts and secures the repo

1. Accept the repository transfer in GitHub.  
2. Set repository visibility (recommend **Private** until launch, or **Public** if preferred).  
3. Review **Settings → Collaborators and teams** — remove developer access if no longer needed per contract.  
4. Optionally keep developer as read-only collaborator for a transition period: _____________________________  

### Step 4 — Verify repository after transfer

New owner (or developer during transition) clones and verifies:

```bash
git clone https://github.com/<NEW_OWNER>/promopower-website.git
cd promopower-website
npm install
npm run build
```

- [ ] Clone succeeds from new URL  
- [ ] Build succeeds  
- [ ] No developer-specific paths or secrets in the repo  

### Step 5 — Update local remotes (developer)

After transfer, update your local clone if you retain a copy:

```bash
git remote set-url origin https://github.com/<NEW_OWNER>/promopower-website.git
```

### What transfers with the GitHub repo

| Included | Not included |
|----------|----------------|
| All source code | Cloudflare account or secrets |
| Git history, branches, tags | Domain registrar access |
| `wrangler.toml` (with old `account_id` until updated) | `FORM_RECIPIENT_EMAIL` secret |
| `TODO.md`, project docs | Email inbox credentials |
| `.env.example` (template only) | Live DNS at `promopower.com.sg` |

---

## Part 2 — Cloudflare settings transfer

The account to configure is the **new agency account** from the Approved handover plan, not the personal account `b8913fb4c5f8fe17d60ce0f824cdd1aa`. Do not replace the live SPF record with a MailChannels-only value. Merge it as shown in that plan. Do not move nameservers off `sgcloudhosting` unless the agency chooses to. Email stays on `mail.promopower.com.sg`.



You will transfer **hosting configuration** from your Cloudflare account to the new owner’s Cloudflare account. The site is a **Cloudflare Worker** serving static files from `out/` plus form API routes.

> **Important:** Cloudflare Workers cannot be “moved” between accounts with one click. The standard approach is: **document settings on the developer account → replicate on the owner account → deploy from the GitHub repo → attach domain → re-enter secrets.**

### Architecture to replicate

```
Browser
   │
   ▼
promopower.com.sg  (DNS → Cloudflare)
   │
   ▼
Cloudflare Worker: promopower-website
   ├── Static assets (Next.js export from /out)
   ├── POST /api/contact      → email via MailChannels
   └── POST /api/jobseekers   → email + file attachment via MailChannels
```

### Step 1 — New owner creates Cloudflare account

1. Sign up at [https://dash.cloudflare.com](https://dash.cloudflare.com)  
2. Note the **Account ID** (Dashboard → any zone → right sidebar, or Workers overview)  
3. Store securely: Account ID = _____________________________  

### Step 2 — Add domain to new owner’s Cloudflare

1. In Cloudflare: **Add a site →** `promopower.com.sg`  
2. Cloudflare provides **nameservers** (two URLs)  
3. At the **domain registrar** (whoever holds `.com.sg`), replace existing nameservers with Cloudflare’s  
4. Wait for status **Active** (can take up to 24–48 hours, often faster)  

### Step 3 — Document developer Cloudflare settings (checklist)

Use this checklist while still logged into the **developer** Cloudflare account. Copy values into the “New owner” column as they are recreated.

#### Worker configuration

| Setting | Developer value | New owner value |
|---------|-----------------|-----------------|
| Worker name | `promopower-website` | `promopower-website` |
| Entry point | `worker/index.ts` | same (from repo) |
| Assets directory | `./out` | same (from repo) |
| Assets binding | `ASSETS` | same (from repo) |
| 404 handling | `404-page` | same (from repo) |
| Compatibility date | `2026-04-17` | same (from repo) |

#### Environment variables (`wrangler.toml` `[vars]`)

| Variable | Value |
|----------|--------|
| `FORM_FROM_NAME` | `PromoPower Website` |
| `FORM_FROM_EMAIL` | `noreply@promopower.com.sg` |

#### Worker secrets (set via CLI — never commit to Git)

| Secret | Purpose | Set on new account? |
|--------|---------|---------------------|
| `FORM_RECIPIENT_EMAIL` | Inbox for contact + jobseeker emails | [ ] Yes — owner runs `wrangler secret put` |
| `FORM_FORCE_DEMO` | Optional — force demo mode even with recipient | [ ] Only if staging needed |

Secrets **cannot be exported** from Cloudflare. The new owner must enter them fresh on their account.

#### Build-time environment (for live forms)

Set when building/deploying (not in `wrangler.toml`):

| Variable | When to set | Purpose |
|----------|-------------|---------|
| `NEXT_PUBLIC_FORMS_LIVE=true` | Production go-live | Hides demo-mode banner; expects Worker to send email |
| `NEXT_PUBLIC_FORM_DEMO_MODE=true` | Staging only | Forces demo banner even if recipient is set |

#### Custom domains

| Domain | Action on new account |
|--------|------------------------|
| `promopower.com.sg` | Workers & Pages → `promopower-website` → **Custom domains → Add** |
| `www.promopower.com.sg` | Add and redirect to apex (recommended) |

Remove `promopower.com.sg` from the **developer** Worker after cutover to avoid conflicts.

#### DNS records for form email (MailChannels)

Add on the **new owner’s** `promopower.com.sg` zone after the zone is active:

**SPF and domain lockdown:** use the records in **Approved handover plan**. Do not publish `v=spf1 include:relay.mailchannels.net ~all` on its own. That would replace the agency’s existing mail authorisation. The `cfid` is the new account’s ID, not `b8913fb4c5f8fe17d60ce0f824cdd1aa`.

#### Redirects (`public/_redirects`)

Replicated automatically on deploy from the repo:

```
/our-story /about-us 301
/our-work/* /our-work 301
/services/product-promoters /services/brand-ambassadors 301
```

Add any additional legacy WordPress URLs before go-live (see `TODO.md` — legacy privacy PDF redirect).

#### Security headers (`public/_headers`)

Replicated automatically on deploy. Key policies:

- CSP allows `connect-src 'self'` (forms post to same-origin `/api/*`)  
- Form action restricted to `'self'`  
- No third-party form endpoints  

#### Preview Worker (developer account)

| Item | After cutover |
|------|----------------|
| `*.workers.dev` URL on developer account | Optional: leave inactive or delete Worker on developer account |
| Developer `account_id` in old deploys | Must not be used for production after handover |

### Step 4 — Update repository for new Cloudflare account

After GitHub transfer, on a machine logged into the **new owner’s** Cloudflare account:

1. Edit `wrangler.toml`:

```toml
account_id = "<NEW_OWNER_CLOUDFLARE_ACCOUNT_ID>"
name = "promopower-website"
main = "worker/index.ts"
# ... remainder unchanged
```

2. Commit and push to the new owner’s GitHub (or owner’s admin does this).

### Step 5 — Deploy on new owner’s Cloudflare

```bash
npm install
npx wrangler login          # log in as new owner (one-time on deploy machine)
wrangler secret put FORM_RECIPIENT_EMAIL
# enter e.g. admin@promopower.com.sg

NEXT_PUBLIC_FORMS_LIVE=true npm run deploy
```

Verify:

- [ ] `https://promopower-website.<new-subdomain>.workers.dev` loads  
- [ ] Custom domain `https://promopower.com.sg` loads (after DNS + domain attach)  
- [ ] Contact form submits and email arrives  
- [ ] Jobseeker form submits; attachment arrives if uploaded  

### Step 6 — Optional: Cloudflare zone transfer (alternative path)

If `promopower.com.sg` was already added to the **developer’s** Cloudflare account during testing:

1. Developer: **Domain → promopower.com.sg → Configure → Move to another account**  
2. Enter new owner’s account ID and confirm  
3. New owner accepts the zone transfer  

Then attach the Worker custom domain on the new account as in Step 3.

If the domain was **never** on the developer account, skip this — new owner adds the zone fresh (Step 2).

### Step 7 — Decommission developer Cloudflare resources

After production is verified on the owner’s account:

- [ ] Remove custom domain from developer Worker (if any)  
- [ ] Delete or disable developer Worker `promopower-website` (optional)  
- [ ] Remove developer as member from owner’s Cloudflare account (if temporarily added)  
- [ ] Confirm billing on developer account has no PromoPower charges  

---

## Part 3 — Go-live sequence (recommended order)

| Order | Task | Owner | Developer |
|-------|------|-------|-----------|
| 1 | Design / content sign-off | Approve | Deliver |
| 2 | GitHub repository transfer | Accept transfer | Initiate transfer |
| 3 | Cloudflare account created | Create | — |
| 4 | Domain added to owner Cloudflare; nameservers updated | Registrar access | Advise |
| 5 | Update `account_id` in `wrangler.toml`; deploy to owner account | Admin / deploy | Assist |
| 6 | Set `FORM_RECIPIENT_EMAIL` secret | Admin | Assist |
| 7 | Add MailChannels DNS records | DNS admin | Provide records |
| 8 | Attach `promopower.com.sg` to Worker | Cloudflare admin | Assist |
| 9 | Set `NEXT_PUBLIC_FORMS_LIVE=true`; redeploy | Deploy | Assist |
| 10 | Test all pages, forms, redirects | QA | Fix issues |
| 11 | Retire old WordPress site | Hosting admin | Provide redirect list |
| 12 | Remove developer access (GitHub + Cloudflare) | Admin | — |

---

## Part 4 — Access and credentials handover

Deliver to the new owner through a **secure channel** (password manager, encrypted share — not email or GitHub):

| Credential / access | Holder after transfer |
|---------------------|------------------------|
| GitHub org/repo admin | PromoPower |
| Cloudflare account | PromoPower |
| Domain registrar | PromoPower |
| `FORM_RECIPIENT_EMAIL` mailbox | PromoPower |
| Corporate email admin (if forms send to Google/Microsoft) | PromoPower |
| Wrangler / deploy API token (if using CI) | PromoPower |

### Optional — GitHub Actions deploy

For ongoing deploys without local `wrangler`:

1. Create Cloudflare API token: **Edit Cloudflare Workers** template  
2. Add GitHub repository secrets:  
   - `CLOUDFLARE_API_TOKEN`  
   - `CLOUDFLARE_ACCOUNT_ID`  
   - `NEXT_PUBLIC_FORMS_LIVE` = `true` (production)  
3. Workflow runs `npm run deploy` on push to `main`  

(CI workflow is not included in the repo by default — add if desired.)

---

## Part 5 — Post-transfer verification checklist

### Website

- [ ] Homepage and all pages load on `https://promopower.com.sg`  
- [ ] HTTPS certificate active (Automatic SSL on Cloudflare)  
- [ ] Mobile and desktop layouts acceptable  
- [ ] Internal links work  
- [ ] Legacy redirects work (`/our-story`, old service URLs)  

### Forms

- [ ] Contact Us — full 3-step flow submits successfully  
- [ ] Contact enquiry email received at `FORM_RECIPIENT_EMAIL`  
- [ ] Reply-to address is the enquirer’s email  
- [ ] Jobseekers — application submits successfully  
- [ ] CV/attachment received (PDF/JPG/PNG, max 5MB)  
- [ ] Demo-mode banner is **not** shown on production  

### SEO and compliance

- [ ] `https://promopower.com.sg/sitemap.xml` accessible  
- [ ] `https://promopower.com.sg/robots.txt` accessible  
- [ ] Google Search Console updated for new site (owner)  
- [ ] Privacy / Terms draft banners removed after legal approval (`TODO.md`)  

### Ownership

- [ ] GitHub repo owned by PromoPower org/user  
- [ ] Cloudflare Worker runs on PromoPower account  
- [ ] Developer removed from admin access (unless ongoing support contract)  
- [ ] Developer preview Worker decommissioned  

---

## Part 6 — Ongoing operations (for new owner)

| Task | Command / location |
|------|-------------------|
| Local development | `npm run dev` → http://localhost:3000 |
| Production deploy | `NEXT_PUBLIC_FORMS_LIVE=true npm run deploy` |
| Update form recipient | `wrangler secret put FORM_RECIPIENT_EMAIL` |
| Content / code changes | Edit repo → deploy |
| Outstanding tasks | See `TODO.md` |
| Mail not sending | Check MailChannels DNS (SPF + `_mailchannels` TXT) and `FORM_RECIPIENT_EMAIL` |

---

## Part 7 — Support transition

| Period | Developer role |
|------|----------------|
| Handover week | Assist deploy, DNS, form testing |
| After handover | Per contract: none, ad-hoc, or retainer |

Document agreed support contact: _____________________________  
Support end date (if applicable): _____________________________  

---

## Related project documents

| Document | Purpose |
|----------|---------|
| `TODO.md` | Go-live blockers (forms, legal, leadership) |
| `AGENTS.md` | Project rules and content standards |
| `.env.example` | Environment variable reference |
| `wrangler.toml` | Cloudflare Worker configuration |
| `03_Technical_Implementation_Guide.md` | Technical requirements |

---

## Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Developer | | | |
| PromoPower representative | | | |

---

*Last updated: June 2026 — aligned with Cloudflare Worker + MailChannels form delivery and GitHub repo `bangkok2000/promopower-website`.*
