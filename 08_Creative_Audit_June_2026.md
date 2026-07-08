# PromoPower Creative Audit — June 2026 (Current)

**Status:** Audit complete — awaiting approval before creative implementation  
**Date:** 18 June 2026  
**Supersedes:** Section assessments in `07_Creative_Recovery_Audit.md` (15 June snapshot)  
**Scope:** Creative direction, visual system, content rhythm, positioning alignment. No code changes in this document.

---

## Executive summary

Since the June 15 audit, the site has improved materially in **information architecture**, **navigation**, **inner-page consistency**, and **workforce-oriented copy**. The homepage is no longer a single long scroll of ten sections — it now uses **quick-path cards + tabbed explore** (Trust → Framework → Services → Industries → Contact), which is a meaningful UX recovery.

However, the **creative experience is still not unified**. The gap is no longer “missing pages” — it is **positioning drift**, **content repetition**, and **two compliance-critical trust signals** that read like an experiential agency rather than an operational workforce partner.

### North star (unchanged)

> A premium workforce execution partner behind successful customer-facing campaigns.

Approved copy anchor (`01_Strategy_and_Content_Blueprint.md`):

> PromoPower helps organisations execute successful customer-facing campaigns by providing professional staffing solutions supported by proven recruitment, training, deployment and management processes.

### Overall creative scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Positioning in copy | **7/10** | Strong on Services, Why, About; weak on homepage hero |
| Visual system consistency | **6/10** | PageHero + dark bands improved; Jobseekers + marquee outliers |
| Information architecture | **8/10** | Tab homepage, section nav, breadcrumbs — major progress |
| Content rhythm / scannability | **5/10** | Homepage tabs help, but Trust/Industries tabs still essay-heavy |
| Trust architecture | **6/10** | Framework + license strong; client-name marquee conflicts with rules |
| Conversion clarity | **7/10** | Contact flow good; homepage CTA path clearer |
| Compliance-safe visuals | **4/10** | Client marquee + named portfolio sections need decision |

**Verdict:** Ready for a **focused creative recovery pass** — not a redesign. Recompose and unify; do not add pages or trust blocks.

---

## What improved since 15 June

| Area | Before (15 Jun audit) | Now (18 Jun) |
|------|----------------------|--------------|
| Homepage structure | ~10 stacked sections | Quick paths + 5 tabs |
| About Us | Light editorial band (`bg-surface-light`) | Dark `section-elevated` / `section-muted` only |
| Inner-page heroes | Mixed centred/grid | Standardised `PageHero` + content rail |
| Why PromoPower | Card grid | Editorial `ContentList` (stronger) |
| Industries icons | Amber accent | Primary `icon-badge` (aligned) |
| Navigation | Inconsistent | Section jump nav, breadcrumbs, FAB |
| FAQ | Accordion (audit assumed) | Card list + sticky topic nav |
| Our Work | No client jump nav | Sticky client nav + scroll affordances |
| Desktop nav | Jobseekers missing (audit note) | Jobseekers present |

These are **structural wins**. The remaining work is **creative tightening**, not architecture.

---

## Critical findings (address before launch)

### 1. Client name marquee on homepage — compliance + positioning

**Component:** `ClientMarquee.tsx`  
**Issue:** Displays identifiable third-party brand names (luxury, spirits, beauty) in a scrolling “Brands We've Served” strip.

**Conflicts with:**
- `AGENTS.md` / project rules: do not use client logos, trademarks, or campaign imagery without rights
- North star: workforce partner, not agency showreel

**Creative recommendation:** **Remove or replace** before public launch unless PromoPower holds explicit written permission for every named brand.

**Safer alternatives:**
- Replace with operational trust strip (Since 2002 · MOM Licensed · Multi-industry experience)
- Generic sector labels without trademarks (e.g. “Luxury retail · FMCG · Spirits & beverages”)
- Move social proof to anonymised case framing on Our Work (without brand names)

**Priority:** 🔴 P0 — legal/brand risk

---

### 2. Named clients on Our Work portfolio

**Pages:** `/our-work` — sections titled by client (APB Singapore, Bacardi, Rémy Cointreau, etc.)

**Issue:** Same compliance concern as marquee. Photos are activation imagery; section headings use real client names.

**Creative recommendation:** Either obtain permissions, or restructure as **anonymised sectors** (“Spirits & beverages client · 2019 roadshow”) per original audit direction.

**Priority:** 🔴 P0 — requires owner decision

---

### 3. Homepage hero headline — experiential framing

**Current H1:** “Building Successful Brand Experiences Through Exceptional People”

**Issue:** Reads as experiential/creative agency. Body copy and tabs are workforce-aligned; the hero undermines the repositioning.

**Recommended direction (content approval required — do not invent copy):**
- Lead with execution partnership, e.g. approved blueprint language around *workforce solutions*, *campaign execution*, *since 2002*
- Shorten visible hero to **one headline + one intro line**; keep depth in expandable prose or About

**Priority:** 🟠 P1 — highest-impact single creative fix

---

## Page-by-page audit (current state)

### Homepage (`/`)

| | Assessment |
|---|---|
| **Creative direction** | Premium dark hero + stat band + client marquee + tabbed explore. Mixed: operational tabs inside experiential hero + agency marquee |
| **Aligns with positioning?** | **Partial (6/10)** |
| **Keep** | Dark hero atmosphere; `StatBand`; tabbed explore; Framework tab; quick-path cards; expandable prose pattern; dual-audience contact tab |
| **Redesign** | Hero headline + remove/replace marquee; simplify Trust tab (see below); reduce nested subsections inside Industries tab |
| **Remove** | Client marquee (pending permission); duplicate Why/Proof prose inside Industries tab; redundant chip grids that repeat Why page |

**Tab inventory:**

| Tab | Content | Issue |
|-----|---------|-------|
| Trust | 6 TrustCards + 2 essay blocks + link to About | Still dense; repeats About + Why |
| Framework | 5-step process flow | ✅ Strongest differentiator — keep |
| Services | 5 compact service cards | ✅ Good summary depth |
| Industries | 10 industry chips + Proof essay + Why essay + chips | ⚠️ Three pages worth of content in one tab |
| Contact | CTA prose + DualAudienceCards | ✅ Clear conversion |

**Desired homepage rhythm:** Desire (hero) → Trust (compact) → Capability (framework) → Explore (services link) → Contact — not re-read Why PromoPower in tab 4.

---

### About Us (`/about-us`)

| | Assessment |
|---|---|
| **Creative direction** | Standard PageHero; dark sections; values grid; leadership cards; section nav |
| **Aligns?** | **Good (7/10)** |
| **Keep** | Hero; values grid; license block; section wayfinding |
| **Redesign** | Leadership placeholders break trust; align section prose width with Why page |
| **Remove** | Redundant checklist if duplicated on Why (verify “What clients value” blocks) |

**Note:** Light-mode band **removed** since June 15 — ✅ resolved.

---

### Services (`/services` + subpages)

| | Assessment |
|---|---|
| **Creative direction** | PageHero; 6 detailed cards with bullet lists; elevated approach section; subpages use consistent 3-section template + wayfinding |
| **Aligns?** | **Partial (6/10)** |
| **Keep** | Six-service grid; subpage template; breadcrumb + section nav on subpages |
| **Redesign** | Index cards: title + one line + link (bullets live on subpages only); remove inline `BackToTopLink` (FAB exists) |
| **Remove** | Duplicate intros between homepage Services tab and index |

**Subpages:** Operational tone in copy ✅; presentation still generic icon-card — acceptable for B2B.

---

### Industries (`/industries`)

| | Assessment |
|---|---|
| **Creative direction** | PageHero; 9 industry cards with distinct descriptions; muted closing section |
| **Aligns?** | **Moderate (6/10)** — improved from “placeholder” |
| **Keep** | Distinct per-industry copy; grid; CTA |
| **Redesign** | Match homepage industry chips to this page (avoid two different industry presentations) |
| **Remove** | Thin closing prose if it adds no new information |

---

### Why PromoPower (`/why-promopower`)

| | Assessment |
|---|---|
| **Creative direction** | PageHero; editorial ContentList; partner closing; section nav |
| **Aligns?** | **Strongest page (9/10)** |
| **Keep** | Entire structure — use as **visual + rhythm reference** |
| **Redesign** | Nothing major |
| **Remove** | Do not duplicate this content on homepage Industries tab |

**Template reference:** Why page sets the standard for inner-page prose + list rhythm.

---

### Our Work (`/our-work`)

| | Assessment |
|---|---|
| **Creative direction** | PageHero; client-named sections; photo grids; lightbox |
| **Aligns?** | **Partial (5/10)** on positioning; compliance concern on naming |
| **Keep** | Gallery grid; sticky nav; operational framing in hero copy |
| **Redesign** | Anonymise or permission-check client headings; reduce “portfolio glamour” (simpler section headers, less editorial drama) |
| **Remove** | Any hover/showcase effects that feel like creative agency craft (review lightbox treatment) |

---

### Contact Us (`/contact-us`)

| | Assessment |
|---|---|
| **Creative direction** | PageHero; split detail list + multi-step form panel |
| **Aligns?** | **Good (8/10)** |
| **Keep** | Step form; trust sidebar (email, address, license); PageContentRail alignment |
| **Redesign** | Demo banner removed at go-live only |
| **Remove** | Nothing critical |

---

### FAQ (`/faq`)

| | Assessment |
|---|---|
| **Creative direction** | Compact PageHero; sticky topic nav; Q&A cards |
| **Aligns?** | **Good (8/10)** |
| **Keep** | Card pattern; section nav with scroll affordances |
| **Redesign** | Minor spacing parity with Why page |
| **Remove** | Nothing |

---

### Jobseekers (`/jobseekers`)

| | Assessment |
|---|---|
| **Creative direction** | Process steps with amber accents; perk cards; bokeh form panel |
| **Aligns?** | **Audience-appropriate but visually off-brand (5/10)** |
| **Keep** | Application flow; PDPA; section nav |
| **Redesign** | Replace amber step circles + perk-card glamour with primary-only accents; match Contact form panel styling |
| **Remove** | Gig-economy “diamond / payments” perk tone if it feels recruitment-portal |

**Note:** Correctly secondary in nav — not over-promoted on homepage ✅

---

### Global chrome

| | Assessment |
|---|---|
| **Nav / Footer** | **Good (8/10)** — professional, full IA, grid-aligned |
| **CTASection** | Consistent ✅ |
| **Back-to-top** | FAB site-wide; remove redundant inline links on Services, About, Privacy, Terms |
| **Motion** | Hero glow orbs + pulse on success states — add `prefers-reduced-motion` guards |

---

## Cross-page drift (updated)

| Drift | Severity | Pages |
|-------|----------|-------|
| Client/trademark visibility | 🔴 Critical | Homepage marquee, Our Work |
| Experiential hero headline | 🟠 High | Homepage |
| Content duplication | 🟠 High | Homepage Trust + Industries tabs vs About + Why |
| Amber accent (recruitment tone) | 🟡 Medium | Jobseekers, legal draft labels, one HeroAccolade |
| Essay density in tabs | 🟡 Medium | Homepage Trust, Industries |
| Redundant back-to-top links | 🟢 Low | Services, About, legal pages |
| `surface-light` tokens unused in pages | 🟢 Low | CSS tokens remain — remove dead tokens when cleaning |

---

## Creative north star (confirmed)

### Personality
**Confident · Operational · Premium · Human · Direct**

### Visual system (target)
- **One mode:** dark charcoal + surface cards + primary orange
- **Amber:** legal draft labels + Jobseekers only today — reduce to exception-only
- **One hero pattern:** PageHero / HomeHero grid (logo column spacer + content col 5+)
- **One card compact variant:** icon + title + one line + link (homepage tiles)
- **One card standard variant:** icon + title + bullets (services index — or slim down)
- **One list variant:** ContentList (Why) for editorial proof points

### Photography
- Desaturated operational imagery ✅ on Our Work
- Hero photo: acceptable if overlay stays abstract/dark — avoid festival/glamour associations

### Motion
- Keep: glow button, subtle card hover
- Reduce: `animate-pulse` on success/check states; hero orb pulse if present
- Add: `prefers-reduced-motion` for marquee, glow, pulse

---

## Recommended implementation plan (after approval)

### Phase A — Compliance & positioning (P0–P1)

| # | Action | Effort |
|---|--------|--------|
| A1 | Remove or replace `ClientMarquee` (owner decision on permissions) | Small |
| A2 | Anonymise or permission-check Our Work section titles | Medium |
| A3 | Revise homepage H1 + subhead with **approved** blueprint copy | Small (content gate) |

### Phase B — Homepage recovery (P1)

| # | Action | Effort |
|---|--------|--------|
| B1 | Slim Trust tab: 4 cards max + 2-sentence intro + link to About | Medium |
| B2 | Slim Industries tab: chips only + one line + link to Industries | Medium |
| B3 | Remove Why/Proof subsections from Industries tab | Small |
| B4 | Confirm tab order: Trust → Framework → Services → Industries → Contact | Trivial |

### Phase C — System unification (P2)

| # | Action | Effort |
|---|--------|--------|
| C1 | Jobseekers: primary-only accents; align form panel to Contact | Medium |
| C2 | Remove inline `BackToTopLink` where FAB exists | Small |
| C3 | Services index: compact cards without bullet lists | Medium |
| C4 | `prefers-reduced-motion` pass on marquee, pulse, glow | Small |

### Phase D — Polish (P3)

| # | Action | Effort |
|---|--------|--------|
| D1 | Typography scale audit (one H1 per page, section titles 4xl) | Small |
| D2 | Remove unused `surface-light` CSS tokens if confirmed unused | Small |
| D3 | Leadership cards when names confirmed | Content |

**Explicitly out of scope:** New pages, new trust blocks, new sections, framework redesign, full visual rebrand.

---

## Approval checklist

Confirm before any creative implementation:

- [ ] **P0:** Client marquee — remove, replace, or confirm legal permission for all named brands  
- [ ] **P0:** Our Work client section titles — anonymise or confirm permission  
- [ ] **P1:** Homepage hero headline — approved replacement copy  
- [ ] **P1:** Homepage Trust tab simplification approved  
- [ ] **P1:** Homepage Industries tab simplification (remove Why/Proof duplication) approved  
- [ ] **P2:** Jobseekers visual alignment to B2B system approved  
- [ ] **Reference:** Why PromoPower remains the inner-page template standard  

**Sign-off (18 June 2026):**

| Decision | Outcome |
|----------|---------|
| Client marquee | Keep — no action |
| Our Work client names | Keep — no action |
| Homepage hero copy | Keep — no action |
| Homepage tab simplification | Keep — no action |
| Jobseekers visual alignment | **Approved — standardise look and feel** (implemented 18 Jun 2026) |

---

## Related documents

| Document | Purpose |
|----------|---------|
| `07_Creative_Recovery_Audit.md` | Original detailed audit + north star (15 Jun) |
| `08_Creative_Audit_June_2026.md` | **Current creative audit** (18 Jun) |
| `01_Strategy_and_Content_Blueprint.md` | Approved positioning |
| `04_Brand_Editorial_Style_Guide.md` | Tone and copy rules |
| `AGENTS.md` | Compliance rules (no client trademarks without rights) |
| `TODO.md` | Non-creative go-live items |

---

*This audit reflects the codebase and deployed preview as of 18 June 2026.*
