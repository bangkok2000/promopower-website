# PromoPower Creative Recovery & Design System Unification

**Status:** Superseded by `08_Creative_Audit_June_2026.md` for current assessments — retain for north star, Phase 2–3 plans, and historical context  
**Date:** 15 June 2026  
**Scope:** Creative direction only. No code, layout, content, or component changes have been made as part of this document.

---

## Executive Summary

The website has improved in **copy accuracy** and **information architecture** since the original redesign, but the **creative experience remains fragmented**. Different pages use different visual modes (dark premium, light editorial, corporate card grids), different densities (essay-length sections vs sparse grids), and different emotional registers (brand experiences vs workforce partner vs activation agency).

The approved positioning — *a premium workforce execution partner behind successful customer-facing campaigns* — is present in the **words** on several pages, but not yet unified in **visual storytelling, hierarchy, or rhythm**.

**Strongest from the original redesign:** Dark premium atmosphere, glow/bokeh motion language, confident hero presence, distinctive typography pairing, high-end hover/interaction quality.

**Strongest from the current implementation:** Workforce-partner copy framing, PromoPower Framework, structured trust signals, compliance-conscious portfolio approach, consistent component primitives (`TrustCard`, `CTASection`, `PromoPowerFramework`).

**Recovery strategy:** Keep the dark premium shell and operational copy. Remove duplicate explanatory sections. Standardise one hero pattern, one card pattern, one trust pattern, one CTA pattern. Use progressive disclosure so approved copy lives deeper on destination pages, not repeated on the homepage.

---

## Phase 1 — Creative Audit

Approved positioning reference (`01_Strategy_and_Content_Blueprint.md`):

> PromoPower helps organisations execute successful customer-facing campaigns by providing professional staffing solutions supported by proven recruitment, training, deployment and management processes.

Target creative position:

> A premium workforce execution partner behind successful customer-facing campaigns.

---

### Homepage (`/`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Mixed: premium experiential headline (“Building Successful Brand Experiences Through Exceptional People”) + corporate staffing body copy + operational framework + activation-style service cards |
| **B. Aligns with positioning?** | **Partial.** Copy increasingly workforce-focused, but headline and section density still feel like an agency selling “brand experiences” rather than a partner selling dependable execution |
| **C. Keep** | Dark hero atmosphere (gradient, blur orbs, glow CTA); PromoPower Framework component; final CTA intent; MOM license / since 2002 signals; confidentiality-aware proof section |
| **D. Redesign** | Hero to lead with execution partnership not “brand experiences”; collapse 10 sections into 5–6; replace 6×2-paragraph service cards with scannable summaries; remove duplicate “Why / Experience / Trust” essay blocks |
| **E. Remove** | Repeated prose blocks that restate the same workforce message; 10 industry cards with identical generic description; second and third “why work with us” sections; experience/differentiator pill grids that duplicate Trust section |

**Section inventory (current):** Hero → Trust grid → More Than Staffing essay → Framework → 6 Service cards (long) → 10 Industry cards → Proof essay → Experience pills → Why essay + pills → CTA.

**Creative conflict:** Reads as explain → explain → explain before it sells. Desired order: desire → trust → capability → contact.

---

### About Us (`/about-us`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Split personality: cinematic dark hero (editorial/agency) → **light surface band** (`bg-surface-light`) → dark values grid → bokeh CTA card |
| **B. Aligns?** | **Partial.** Messaging is workforce-aligned; light editorial section breaks the dark premium system used elsewhere |
| **C. Keep** | Hero messaging (“Trusted Workforce Support Since 2002”); values grid structure; MOM license closing; approved operational copy |
| **D. Redesign** | Unify to single dark visual mode; replace stock-style hero image treatment with abstract operational visual; align typography scale with Why PromoPower |
| **E. Remove** | Light-mode section (largest inconsistency on site); redundant “What Clients Value” checklist if duplicated on Why page |

---

### Services (`/services` + subpages)

| | Assessment |
|---|---|
| **A. Current creative direction** | Premium activation agency: glowing hero orb, 6 icon cards with bullet lists, light “Structured Service Approach” band |
| **B. Aligns?** | **Partial.** Service descriptions are professional; presentation feels like a capabilities brochure for an experiential agency |
| **C. Keep** | Six-service grid structure; link-through to detail pages; service pillar list; consultative CTA |
| **D. Redesign** | Reduce card copy density on index; use one consistent card template site-wide; remove light band or apply it site-wide (not isolated); subpages should share one template rhythm |
| **E. Remove** | Duplicate long intros between homepage service section and services page; redundant bullet repetition across index and subpages |

**Subpages (`/services/*`):** Use `ServicePageTemplate` — cleaner than homepage cards but still generic. Direction: **operational case-ready** not **agency showcase**.

---

### Industries (`/industries`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Unfinished workforce page: minimal hero + 9 identical card shells + generic prose closing |
| **B. Aligns?** | **Weak.** Content is correct category; creative execution feels placeholder |
| **C. Keep** | Industry list; confidentiality note; CTA to contact/services |
| **D. Redesign** | Give each industry a distinct one-line context (homepage currently uses same sentence for all 10); add visual rhythm (featured industries vs full grid); match card styling to Services (currently uses amber accent vs primary elsewhere) |
| **E. Remove** | Generic repeated card descriptions; thin middle section that adds no new information |

**Note:** `IndustryCard` uses **accent-amber** icons while most site uses **primary orange** — subtle but noticeable inconsistency.

---

### Why PromoPower (`/why-promopower`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Corporate workforce solutions: dark hero, 6 reason cards, centred essay, CTA |
| **B. Aligns?** | **Strongest page on site.** Closest to approved positioning |
| **C. Keep** | Overall structure; reason card grid; practical partner closing; license mention |
| **D. Redesign** | This page should become the **template reference** for other pages — not be duplicated on homepage |
| **E. Remove** | Nothing major — avoid re-adding same content elsewhere |

---

### Our Work (`/our-work` + `[slug]`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Premium portfolio / luxury activation case studies; grayscale imagery; editorial case layout |
| **B. Aligns?** | **Partial.** Confidential anonymised cases align with compliance; visual treatment still feels like creative agency portfolio |
| **C. Keep** | Anonymised case structure; challenge/solution/outcome pattern; confidentiality framing; back navigation |
| **D. Redesign** | Shift from “portfolio glamour” to “execution evidence”; reduce cinematic hero height; emphasise operational outcomes over visual drama |
| **E. Remove** | Hover gimmicks that imply creative agency craft; duplicate CTA patterns if homepage already converts |

---

### Contact Us (`/contact-us`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Premium B2B conversion page: split layout, multi-step form, trust sidebar (email, phone, license) |
| **B. Aligns?** | **Good.** Consultative, professional, operational |
| **C. Keep** | Split layout; step form; license badge; contact details |
| **D. Redesign** | Shorten left-column copy; align form visual weight with rest of site; ensure hero-less entry feels intentional |
| **E. Remove** | Demo-mode notice from final production (prototype only) |

---

### FAQ (`/faq`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Standard corporate FAQ: hero + accordion |
| **B. Aligns?** | **Yes** — functional, neutral, appropriate |
| **C. Keep** | Accordion pattern; operational Q&A content |
| **D. Redesign** | Minor — match hero height and spacing to Why PromoPower |
| **E. Remove** | Nothing |

---

### Jobseekers (`/jobseekers`)

| | Assessment |
|---|---|
| **A. Current creative direction** | Recruitment / talent pool: step process, perks cards, application form |
| **B. Aligns?** | **Audience conflict.** Page is necessary but creative tone drifts toward recruitment portal; dilutes B2B homepage story if over-linked |
| **C. Keep** | Professional application flow; PDPA compliance; process steps |
| **D. Redesign** | Tone down “talent pool” glamour; align visually with B2B dark system; keep out of primary brand story on homepage |
| **E. Remove** | Perk cards that feel like gig-economy recruitment marketing |

---

### Global chrome (Nav, Footer)

| | Assessment |
|---|---|
| **A. Current creative direction** | Clean premium dark nav; comprehensive footer |
| **B. Aligns?** | **Good** — professional, not agency |
| **C. Keep** | Nav structure (About, Services, Industries, Why, Our Work, FAQ, Contact); footer compliance lines |
| **D. Redesign** | Desktop nav omits Jobseekers (mobile includes it) — unify; active state styling is consistent |
| **E. Remove** | Nothing critical |

---

### Cross-page creative drift summary

| Drift type | Pages affected |
|---|---|
| Light vs dark mode | About, Services (partial) vs rest of site |
| Card icon colour | Industries (amber) vs Services/Trust (primary) |
| Essay density | Homepage (critical), About, Services index |
| Agency/experiential headline | Homepage hero |
| Corporate grid (good) | Why PromoPower, FAQ |
| Portfolio/agency visual | Our Work |
| Recruitment tone | Jobseekers |

---

## Phase 2 — Creative North Star

### Brand personality

**Confident. Operational. Premium. Human. Direct.**

Speak like a senior operations partner who has run hundreds of deployments — not a creative pitch deck, not an HR brochure.

### Visual personality

**Dark premium execution environment.** Controlled warmth (orange primary, restrained amber accent). High contrast readability. Subtle motion — never spectacle.

One visual mode sitewide: **dark charcoal base + surface cards + primary accent**. Light bands become exception-only (e.g. one pull-quote panel), not full sections.

### Emotional personality

**Reassurance first, then capability, then partnership.**

Visitor should feel: *“These people have done this before. They will not embarrass our brand on the floor. They handle complexity.”*

Not: *“Wow, what a beautiful agency.”* Not: *“Generic staffing vendor.”*

### Photography direction

- **Use:** Abstract operational textures, blurred event/retail environments, hands/queues/interaction silhouettes — never identifiable clients or campaigns
- **Avoid:** Stock “creative team brainstorming”, luxury beauty campaign aesthetic as default, celebrity/event glamour
- **Treatment:** Desaturated, low-opacity backgrounds; never full-bleed hero glamour unless anonymised and operational

### Typography direction

- **Headlines (Playfair):** Short, declarative statements — max 8–12 words in heroes
- **Body (Lora):** Shorter paragraphs (2–3 sentences visible before break)
- **Labels (Manrope):** Uppercase tracking for section labels only — not overused
- **Scale:** Reduce hero from `text-7xl` essays to one strong line + one supporting line on homepage

### Layout direction

- **Hero:** One pattern — left-aligned or centred, max 2 text blocks + 2 CTAs + 3 trust chips
- **Body:** Alternate **prose band** (max-width 3xl) with **card band** (grid) — never prose + prose + prose
- **Max visible sections above fold on homepage:** Hero + one trust row
- **Progressive disclosure:** Summaries on homepage; depth on Services, Industries, Why, About

### Motion direction

- **Keep:** Glow button hover, subtle blur orbs, card border hover
- **Reduce:** `animate-pulse` on hero orbs (reads as startup/agency energy)
- **Add:** `prefers-reduced-motion` guards on all decorative animation
- **Remove:** Portfolio image hover colour-dodge effects that feel like creative showcase

### Trust architecture

**One trust system, three tiers:**

1. **Immediate (hero/footer):** Since 2002 · MOM Licensed · Professional Staffing Solutions
2. **Proof (homepage mid):** Framework (Recruit → Review) — operational credibility
3. **Deep (Why PromoPower / About):** Reason cards, values, license detail

Do **not** add more trust blocks. Consolidate existing six homepage trust surfaces into two.

---

## Phase 3 — Homepage Recovery Plan

### Current problem

Homepage is ~10 sections, ~2,500+ visible words, and repeats Services, Industries, Why PromoPower, and Trust before asking for contact.

### Target narrative order

1. **Desire** — One headline + one paragraph: premium execution partner for customer-facing campaigns
2. **Trust** — 3 chips + 3–4 trust cards (not 6 + essay)
3. **Capability** — PromoPower Framework (keep, tighten intro)
4. **Contact** — Strong CTA (short body)

Everything else moves deeper or gets summarised.

### Section-by-section plan

| Section | Action | Rationale |
|---|---|---|
| Hero | **Redesign** | Replace experiential headline; cut 3 paragraphs to 1; keep dual CTA + 3 chips |
| Trust + 6 TrustCards + essay | **Merge & simplify** | Keep 4 cards max; cut left-column essay to 2 sentences + link to About |
| More Than Staffing essay | **Remove from homepage** | Move core message to About; one sentence teaser only |
| PromoPower Framework | **Keep** | Best operational differentiator; shorten intro 30% |
| 6 Service cards (2 paras each) | **Redesign** | 6 tiles: title + 1 line + link; detail on `/services` |
| 10 Industry cards | **Remove** | Replace with 1 line + link to `/industries`; homepage duplicate with generic copy hurts quality |
| Proof / confidentiality essay | **Keep (short)** | Unique compliance-aware message; cut to 3 sentences |
| Built On Experience pills | **Remove** | Duplicates trust + why |
| Why Organisations essay + pills | **Remove** | Duplicates `/why-promopower` entirely |
| Final CTA | **Keep (shorten)** | Cut body from ~80 words to ~25 |

### Target homepage structure (post-recovery)

1. Hero — desire  
2. Trust strip — credibility  
3. Framework — capability  
4. Services overview — 6 compact tiles  
5. Proof statement — confidentiality-aware confidence  
6. CTA — contact  

**Six sections total** (down from ten).

### What NOT to add

No new trust blocks, industry grids, testimonial strips, client logos, stat counters, or duplicate “why us” content until unified system is approved and implemented.

---

## Phase 4 — Navigation & Information Architecture Review

### Current nav (desktop)

Home · About Us · Services · Industries · Why PromoPower · Our Work · FAQ · Contact

### Chapter coherence test

| Page | Reads as same story? | Issue |
|---|---|---|
| Homepage | **No** — tries to be all chapters at once | Contains full Services, Industries, Why summaries |
| About | **Partial** | Light section breaks visual chapter |
| Services | **Partial** | Agency-style presentation |
| Industries | **Weak chapter** | Feels like appendix, not core story |
| Why PromoPower | **Yes** — best aligned | Should be referenced, not duplicated |
| Our Work | **Different book** | Portfolio tone vs workforce tone |
| Contact | **Yes** | Clean conversion chapter |

### Duplication map

| Content | Appears on |
|---|---|
| Workforce since 2002 | Homepage (×4), About, Why, Footer |
| Why choose us | Homepage (×2), Why page |
| Services detail | Homepage (long), Services index, 6 subpages |
| Industries list | Homepage (broken generic), Industries page |
| MOM license | Homepage, About, Why, Contact, Footer, Jobseekers |
| Framework | Homepage only (good — keep as hero differentiator) |

### Recommended unified structure

**Primary story (B2B client journey):**

```
Home → Why PromoPower → Services → Industries → Our Work → Contact
         ↑ proof          ↑ capability  ↑ context   ↑ evidence
```

**Supporting pages (secondary):** About (company depth), FAQ (objections), Jobseekers (separate audience — footer/mobile only)

### Nav recommendations

| Change | Reason |
|---|---|
| Keep current labels | Aligned with approved IA |
| Demote Jobseekers | Not part of B2B creative story (footer link sufficient on desktop — already done) |
| Consider merging About + Why | Optional future simplification — not required now |
| Our Work | Reframe nav label mentally as “Execution Evidence” not portfolio |

### Homepage → inner page handoff

Each homepage section should **tease and link**, not **contain**:

- Services → 6 one-liners → `/services`
- Trust → 4 cards → `/why-promopower`
- Company depth → `/about-us`
- Industries → single line → `/industries`

---

## Phase 5 — Content Hierarchy Review

**Principle:** Approved copy stays. Presentation changes.

### Immediately visible (above fold / first scroll)

- Who PromoPower is (one line)
- What outcome they deliver (customer-facing campaign execution)
- Primary CTA
- Three trust signals (2002, MOM, Professional Staffing)

### Summarised on homepage (scannable)

- Framework steps (titles + one line each)
- Service names (not paragraphs)
- One proof/confidentiality statement

### Move deeper (destination pages)

| Content | Destination |
|---|---|
| Long workforce philosophy | About |
| Full service descriptions | `/services` + subpages |
| Industry-specific context | `/industries` |
| Why choose us (6 reasons) | `/why-promopower` |
| Case evidence | `/our-work` |
| FAQ objections | `/faq` |

### Density problems (current)

| Location | Issue | Fix |
|---|---|---|
| Homepage hero | 3 paragraphs | 1 paragraph |
| Homepage service cards | 2 paragraphs × 6 | 1 line × 6 |
| Homepage industry grid | Same sentence × 10 | Remove from homepage |
| Homepage sections 8–9 | Full essay + 15 pills | Remove — live on Why page |
| About light section | 3 paragraphs + checklist | Keep content, reduce 40% visible text |
| Services index cards | Summary + 3 bullets each | Summary + 1 bullet or link only |

### Progressive disclosure pattern (recommended)

```
[Headline]
[1-sentence summary]
[Optional: 3 bullets max]
[Learn more →]
```

Apply to all card-based sections site-wide.

---

## Phase 6 — Visual System Review

### Hero design

| Page | Current | Issue | Recommendation |
|---|---|---|---|
| Homepage | Dark gradient + pulse orbs + mega headline | Experiential + busy | Static orbs; shorter headline; left-aligned |
| About | Full-bleed image + blur | Agency editorial | Abstract dark hero matching Why page |
| Services | Centred + glow orb | Activation agency | Match Why hero pattern |
| Industries | Same as Why | OK but thin | Add subtle texture only |
| Why | **Reference pattern** | — | Use as site hero standard |

### Typography scale

- **Issue:** Every section uses `text-5xl`–`text-7xl` — no hierarchy between primary and secondary sections
- **Fix:** Hero `7xl` → one page only; section headings `4xl`–`5xl`; card titles `2xl`; body `lg` max

### Card system

**Current:** Three de facto systems

1. `TrustCard` — primary icon, dark surface  
2. `IndustryCard` — **amber** icon, dark surface  
3. Services article — primary icon + bullet list  

**Recommendation:** One card component, two variants:

- **Compact** (homepage tiles): icon + title + 1 line + link  
- **Standard** (inner pages): icon + title + 2–3 bullets + link  

Remove amber-only IndustryCard styling unless amber is reserved for one specific meaning.

### Imagery

- About hero image and Our Work grayscale photos feel like **different brands**
- **Standardise:** either all abstract/dark (preferred) or all desaturated operational photography with identical overlay treatment

### Grid system

- Generally consistent (`max-w-7xl`, responsive grids)
- **Issue:** Homepage alternates full-width essay + dense grid + essay — creates flat rhythm
- **Fix:** Strict alternation: **Prose section → Grid section → Prose section**

### Whitespace

- Vertical padding consistent (`py-16 sm:py-24`) — good
- **Issue:** Too much horizontal copy width on essay sections (`max-w-5xl` centred walls of text)
- **Fix:** Narrow prose to `max-w-3xl`; increase margin between sections when preceding section was dense

### Section transitions

- `border-y border-white/5` and `bg-charcoal-dark/45` used inconsistently
- **Fix:** Three band types only — **Default dark**, **Surface container** (slight lift), **CTA band** (charcoal-dark/70)

### Visual rhythm scorecard

| Area | Rating | Notes |
|---|---|---|
| Colour tokens | Strong | Preserve `#FF8C00` system |
| Typography pairing | Strong | Playfair + Lora works |
| Motion | Medium | Pulse orbs feel agency-startup |
| Section rhythm | Weak | Homepage especially |
| Cross-page consistency | Weak | Light bands + amber cards |
| Premium feel | Strong | Glow, blur, dark surfaces |
| Workforce feel | Medium | Copy yes, visuals mixed |

### Where site feels repetitive

- Same card layout repeated with different copy (homepage services, services page, why page)
- Same “since 2002” narrative in multiple prose blocks

### Where site feels flat

- Industry cards with identical descriptions
- Centre-aligned essay sections back-to-back

### Where site feels generic

- Icon-in-circle card pattern used everywhere without hierarchy
- Material Symbols as universal visual shorthand

### Where site feels corporate

- Why PromoPower (acceptable — lean into this as base)
- FAQ
- Trust pill grids on homepage

**Goal:** Premium corporate **execution** — not generic corporate **staffing**.

---

## Merge Strategy: Original Redesign + Current Implementation

| Element | Source | Action |
|---|---|---|
| Dark premium atmosphere | Original | **Keep as shell** |
| Glow button / bokeh | Original | Keep, reduce motion |
| Video / kinetic hero | Original | Do not restore — wrong positioning signal |
| Client ticker / logos | Original | Do not restore — compliance risk |
| Workforce copy | Current | **Keep as voice** |
| Framework component | Current | **Keep as hero proof** |
| IA pages (Industries, Why, FAQ) | Current | Keep routes, unify presentation |
| Light editorial bands | Current | **Remove or systematise** |
| Long homepage | Current | **Cut aggressively** |
| Anonymised case studies | Current | Keep, reduce portfolio glamour |
| Multi-step forms | Current | Keep |

---

## Implementation Gate

**Do not implement until approved.**

When approved, implementation order should be:

1. **Define shared hero + card variants** (design system only — 2 components, not 10)  
2. **Homepage recovery** (biggest impact)  
3. **Unify About + Services + Industries** to Why page visual standard  
4. **Our Work visual de-glamour**  
5. **Jobseekers tone alignment** (secondary audience)

No new pages. No new trust blocks. No new sections. **Recompose and unify existing content.**

---

## Appendix: VS Code / System Memory Safeguards

Separate from creative work — technical safeguards applied to reduce IDE memory pressure (prior crash cause):

| Safeguard | Status |
|---|---|
| ESLint ignores `.vercel/**` and `.next/**` | Applied |
| VS Code watcher excludes build folders | Applied |
| ESLint runs on save only (not continuous) | Applied |
| TypeScript server memory capped (2048 MB) | Applied |
| Search excludes build artifacts | Applied |

**Recommended manual steps:**

1. Reload VS Code window after opening project  
2. Do not run `npm run lint` without path scope during development  
3. Delete `.next` and `.vercel` locally if they reappear after builds  
4. Avoid running `next dev` + full ESLint workspace scan simultaneously  

---

## Approval Checklist

Before any creative implementation begins, confirm:

- [ ] North Star positioning approved  
- [ ] Homepage reduced to 6-section structure approved  
- [ ] Light-mode section removal on About/Services approved  
- [ ] Industry cards removed from homepage approved  
- [ ] Why PromoPower as visual reference template approved  
- [ ] Card system unification (primary-only icons) approved  

**Awaiting approval.**
