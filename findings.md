# PromoPower Website — Comprehensive Gap Analysis & Implementation Roadmap

---

## Executive Summary

The existing codebase contains strong visual foundations and a well-engineered technical architecture. However, there is a fundamental and pervasive **brand positioning misalignment** between the current implementation and the project documentation. The site has been built to position PromoPower as a glamorous, entertainment-oriented **event talent agency**, when the strategy documents define it unambiguously as a professional, B2B **workforce staffing partner**. This misalignment affects every page, nearly all copy, the navigation structure, the information architecture, the visual choices, and several compliance decisions. The gap is strategic and content-deep, not merely cosmetic.

---

## 1. Site Architecture & Navigation

### 1.1 Existing Implementation

| Route | Title |
|---|---|
| `/` | Homepage |
| `/our-story` | Our Story |
| `/services` | Services |
| `/our-work` | Our Work & Talent |
| `/our-work/[slug]` | Campaign Detail |
| `/jobseekers` | Jobseekers |
| `/contact-us` | Contact Us |

**Navigation labels (desktop):** Our Story · Services · Our Work & Talent · Jobseekers · CTA "Plan a Campaign"

### 1.2 Required Architecture (per docs)

| Required Route | Status |
|---|---|
| `/` | ✅ Exists |
| `/about` (About Us) | ❌ Missing — current `/our-story` is a partial substitute but misnamed and misaligned |
| `/services` | ⚠️ Exists but substantially incomplete |
| `/services/[slug]` | ❌ Missing — no individual service pages |
| `/industries` | ❌ Missing entirely |
| `/why-promopower` | ❌ Missing entirely |
| `/contact` or `/contact-us` | ✅ Exists |

**Navigation labels required:** Home · About Us · Services · Industries · Why PromoPower · Contact

### 1.3 Gaps

1. **Missing pages**: Industries and Why PromoPower are entirely absent — two of the most strategically important pages in the IA.
2. **Route naming misalignment**: `/our-story` should be `/about` or `/about-us` for SEO clarity and IA alignment.
3. **Jobseekers route**: Not mentioned in the required IA. Its presence as a prominent nav item dilutes B2B positioning and creates a mixed audience signal. If retained, it should be demoted out of primary navigation.
4. **Our Work & Talent route**: Framed around "talent" rather than "work". The documentation does not include a portfolio/case study section as a primary nav item, though case studies are referenced in service pages.
5. **No individual service pages**: The documentation requires each of the 6 services to have a dedicated page (600–900 words) with Challenge / How PromoPower Helps / Process / Benefits / FAQs / CTA structure.
6. **CTA label "Plan a Campaign"**: Acceptable but not exactly aligned with approved CTAs ("Get In Touch", "Speak With Our Team"). "Plan a Campaign" leans toward agency framing.

**Estimated complexity:** Medium — routing additions are straightforward in Next.js but require significant new page content.

---

## 2. Homepage (`/`)

### 2.1 Required Section Flow (per docs)

1. Hero
2. Trust & Credibility
3. More Than Staffing (company differentiation)
4. PromoPower Framework (Recruit → Prepare → Deploy → Support → Review)
5. Services Overview
6. Industries
7. Why PromoPower
8. Proof & Confidence
9. Contact CTA
10. Footer

### 2.2 Current Section Flow

1. Hero (video background)
2. Trust & Accreditations (awards strip)
3. Social Proof — Client ticker tape
4. Core Services Overview (3 cards)
5. Dual-CTA panel (Clients / Talent)

**Sections present vs required: 5 of 9 required sections exist in some form. 4 are entirely missing. Of those 5, all require significant content and framing revision.**

---

### 2.3 Hero Section

**Existing implementation:**
- Video background: music festival crowd (mixkit.co CDN)
- Badge: "Singapore's Premier Staffing"
- Headline: "POWERING FLAWLESS BRAND ACTIVATIONS"
- Subheadline: "We combine operational precision with kinetic human energy to execute flawless on-site activations..."
- CTAs: "Hire Event Talent" / "Join Our Roster"

**Documentation requirements:**
- Visual: abstract customer engagement, retail environments, branded gradients. No festival footage, no concert imagery.
- Headline: "Building Successful Brand Experiences Through Exceptional People"
- Subheadline: Approved copy from 05_Complete_Website_Copy_Master.md (three paragraphs)
- Trust signal row below CTAs: "20+ Years Experience · MOM Licensed Employment Agency · Professional Staffing Solutions"
- CTAs: "Get In Touch" / "Explore Our Services"

**Gaps:**

| Gap | Severity |
|---|---|
| Music festival video (explicitly prohibited in docs) | Critical |
| Headline — hype language, not approved copy | Critical |
| Subheadline — "kinetic human energy", "flawless activations" (agency-speak, prohibited) | Critical |
| CTA "Hire Event Talent" — talent agency framing | High |
| CTA "Join Our Roster" — talent agency framing, belongs on jobseekers page only | High |
| Missing trust signal row beneath CTAs | High |
| Badge "Singapore's Premier Staffing" — superlative language ("premier") | Medium |

---

### 2.4 Trust & Accreditations Strip

**Existing implementation:**
- Three icons: SME500 Award 2022, Entrepreneur 100 Award 2021, MOM Compliant Licensed Agency

**Documentation requirements:**
- Two-column layout (narrative left, trust cards right)
- Cards: Established Since 2002 · MOM Licensed Employment Agency · Professional Talent Pool · Operational Support & Coordination · Multi-Industry Experience · End-to-End Workforce Solutions
- Supporting narrative body copy (from 05_Complete_Website_Copy_Master.md, ~200 words)
- Heading: "Trusted Workforce Solutions Since 2002"

**Gaps:**

| Gap | Severity |
|---|---|
| Awards strip ≠ Trust & Credibility section (wrong format, wrong purpose) | High |
| Missing heading "Trusted Workforce Solutions Since 2002" | High |
| Missing 200-word narrative body copy | High |
| Missing 6 required trust indicator cards | High |
| Awards are supplementary trust signals, not replacements for the primary ones | Medium |

---

### 2.5 Social Proof — Client Ticker Tape

**Existing implementation:**
- Scrolling ticker listing 36 named client brands: Pernod Ricard, Bacardi, Dior, Givenchy, Shiseido, L'Oréal Luxe, Chanel, etc.
- Label: "Trusted By Leading Brands To Deliver Seamless Experiences"

**Documentation requirements:**
- Client logos and client names must NOT be used without explicit written approval.
- Replace with experience indicators, service capabilities, operational strengths.
- "Proof & Confidence" section should use cards like: "20+ Years Supporting Brands", "Extensive Multi-Industry Experience", "Structured Recruitment Process", "Professional Talent Network".

**Gaps:**

| Gap | Severity |
|---|---|
| Names all 36 clients without confirmed written approval — copyright/legal risk | **Critical** |
| Directly contradicts documentation rule against naming clients without approval | **Critical** |
| Some listed names are world-famous trademarked brands (Dior, Chanel, L'Oréal) | **Critical** |
| Ticker tape format unsuitable for B2B trust building | High |

---

### 2.6 Services Overview Section

**Existing implementation:**
- Section heading: "Flawless Execution. Radiant Talent."
- Label: "End-to-End Campaign Execution"
- 3 cards: Dynamic Promoters · Roving Talent · On-Site Management
- Link: "Explore Our Services"

**Documentation requirements:**
- Heading: "Workforce Solutions Designed Around Your Objectives"
- 6 service cards: Brand Ambassadors · Product Promoters · Event Personnel · Retail Activation Teams · Roadshows & Consumer Engagement · Campaign Support & Coordination
- Each card: Service Name, Brief Summary, Learn More CTA
- Approved copy from 05_Complete_Website_Copy_Master.md

**Gaps:**

| Gap | Severity |
|---|---|
| Heading uses prohibited language ("Radiant Talent") | High |
| Only 3 services represented (6 required) | High |
| Service names don't match approved service names | High |
| "Roving Talent" not in approved service list | High |
| "Dynamic Promoters" is informal agency language | Medium |
| No Learn More CTAs on individual service cards | Medium |
| Missing introduction paragraph from approved copy | Medium |

---

### 2.7 Missing Sections — Homepage

The following required homepage sections are entirely absent:

| Missing Section | Description | Severity |
|---|---|---|
| **More Than Staffing** | Differentiation section: narrative left, workforce lifecycle illustration right. Copy from 05_Complete_Website_Copy_Master.md. | High |
| **PromoPower Framework** | 5-step horizontal timeline: Recruit → Prepare → Deploy → Support → Review. Scroll-triggered animation. Reusable component required. | High |
| **Industries** | Grid of 10 industries with icons. No client logos. | High |
| **Why PromoPower** | Alternating content blocks: Experience, Process, People, Responsiveness, Long-Term Partnership. | High |
| **Proof & Confidence** | Experience indicator cards replacing client logo section. 6 cards with operational strengths. | High |
| **Contact CTA** | Full-width panel. Heading: "Let's Start A Conversation". Approved copy. CTA: "Speak With Our Team". | Medium |

---

### 2.8 Dual-CTA Panel ("Clients / Talent")

**Existing implementation:**
- Two-panel flex accordion with Bvlgari branded background image
- Left panel: "Clients" — "Let's map out your next activation." / CTA: "Contact Us"
- Right panel: "Talent" — "Got the energy? Step into the spotlight with top global brands." / CTA: "Apply Now"

**Documentation requirements:**
- No dual B2B/B2C split panel on homepage (reflects agency framing)
- Homepage should close with a single, professional Contact CTA
- Using "Bvlgari" branded image in background is a copyright/trademark risk

**Gaps:**

| Gap | Severity |
|---|---|
| Bvlgari branded background image — trademark risk | **Critical** |
| "Got the energy? Step into the spotlight" — entertainment agency language | High |
| Dual panel splits visitor journey between B2B and B2C | High |
| Should be replaced by unified "Let's Start A Conversation" CTA panel | Medium |

---

## 3. About / Our Story Page (`/our-story`)

### 3.1 Existing Implementation

- **Hero:** "We Build Connections That Count." / "Founded on a vision of seamless planning and flawless execution."
- **Section 2:** Harvey Mackay third-party quote + 2 paragraphs under "The PromoPower Difference"
- **Section 3:** MOM compliance badge, SME500 & Entrepreneur 100 awards

### 3.2 Required Structure (per docs)

1. Hero: "More Than Twenty Years Of Building Successful Brand Experiences" (approved headline)
2. Company Story (founding year, evolution, reputation)
3. Our Philosophy
4. What We Believe
5. How We Work
6. Why Experience Matters
7. Future Vision
8. Contact CTA

Target length: ~1,200–1,500 words.

### 3.3 Gaps

| Gap | Severity |
|---|---|
| Hero headline is unapproved, generic agency copy | High |
| Third-party quote (Harvey Mackay) — not brand content, not in approved copy | High |
| "Founded on a vision" — vague, startup-like framing | High |
| Page is ~250 words vs required 1,200–1,500 | High |
| Missing: Company Story, Our Philosophy, What We Believe, How We Work, Why Experience Matters, Future Vision sections | High |
| Missing Contact CTA at bottom | Medium |
| Compliance section present (good) but positioned as primary content rather than supportive section | Low |
| Page route should ideally be `/about` for SEO alignment | Low |

---

## 4. Services Page (`/services`)

### 4.1 Existing Implementation

- **Hero:** "Precision Management. Radiant Execution." / "From sourcing the perfect brand ambassador to managing the crowds..."
- **3 service modules (Z-pattern layout):**
  - Module 01: Premium Brand Ambassadors
  - Module 02: Roving Talents
  - Module 03: Campaign Management & Logistics
- **Success Principles:** 5 value cards (Innovation, Integrity, Partnership, Excellence, Strategy)
- **CTA:** "Ready for deployment?"

### 4.2 Required Structure (per docs)

- Overview page with 6 service cards
- Each service has a **dedicated individual page** (600–900 words) with: Overview · Why It Matters · Common Challenges · How PromoPower Helps · Our Process · Benefits · CTA
- Service names: Brand Ambassadors · Product Promoters · Event Personnel · Retail Activation Teams · Roadshows & Consumer Engagement · Campaign Support & Coordination

### 4.3 Gaps

| Gap | Severity |
|---|---|
| "Radiant Execution" — prohibited hype language | High |
| "sourcing the perfect brand ambassador...managing the crowds" — agency framing | High |
| "Roving Talents" not an approved service name | High |
| Only 3 services vs 6 required | High |
| No individual service sub-pages exist | High |
| Services lack Challenge/How PromoPower Helps/Process/Benefits/FAQs structure | High |
| "Ready for deployment?" — military metaphor, informal tone | Medium |
| Success Principles section (Innovation, Integrity, etc.) not in approved content | Medium |
| Service imagery uses same placeholder Google CDN URL repeatedly (identical image for all) | Medium |
| Z-pattern layout is good but should use approved copy | Low |

---

## 5. Contact Page (`/contact-us`)

### 5.1 Existing Implementation

- **Heading:** "Let's Plan Something Unforgettable."
- **Subheadline:** "Need a turnkey talent solution for your next activation? Reach out to our management team..."
- **3-step form:** Step 1: Talent type + headcount; Step 2: Activation date; Step 3: Name/company/email
- **Contact details:** Email, phone, address
- **MOM trust badge**
- **Success state:** "Request Received."

### 5.2 Required Structure (per docs)

- Heading: "Let's Discuss Your Requirements"
- Approved body copy (consultative, not salesy)
- Simple enquiry form (not talent-type-first)
- Contact details
- Business hours
- Location information
- Response expectation: "We aim to respond within one business day."

### 5.3 Gaps

| Gap | Severity |
|---|---|
| "Let's Plan Something Unforgettable" — hype language, not approved copy | High |
| "turnkey talent solution" / "activation" — agency framing | High |
| Form opens by asking for "talent type" (Brand Ambassadors, Roving Talent, Event Crew) — incorrect service labels, talent-agency framing | High |
| Missing business hours | Medium |
| Missing response time expectation | Medium |
| "Quick estimate within 4 hours" — unverified/potentially misleading claim | Medium |
| "Get Custom Proposal" CTA — proposal framing, not enquiry framing | Low |
| Form is technically functional but not connected to any email/CRM system (console.log only) | Medium |

---

## 6. Our Work Page (`/our-work`) & Campaign Detail Pages

### 6.1 Existing Implementation

- Hero: "See the Spark in Action"
- 2 featured case studies (anonymised as "Major Global Tech Brand" / "Luxury Cosmetics Label") — with fabricated statistics
- Full portfolio grid (masonry) — 10+ named clients
- "Luminaries Spotlight" talent section (named individuals: Sarah, Marcus, etc.)

### 6.2 Alignment with Documentation

**Not part of the required IA.** The documentation does not specify an "Our Work" page. It references case studies as supporting content within service pages.

### 6.3 Gaps

| Gap | Severity |
|---|---|
| Named client case studies in `lib/data.ts` (Tiger Beer, Dior, Bacardi, Chanel, etc.) without confirmed approval | **Critical** |
| Fabricated statistics in `lib/data.ts` (e.g. "25,000 samples", "40% uplift", "60% increase") — documentation explicitly prohibits invented metrics | **Critical** |
| "Luminaries" terminology — proprietary internal label not in approved content | Medium |
| "See the Spark in Action" — entertainment agency language | Medium |
| "High-impact activations powered by our elite roster of Luminaries" — prohibited copy | Medium |
| "Meet Our Top-Tier Talent" section with named talent individuals (Sarah, Marcus) — identifiable people risk | Medium |
| Portfolio images all use identical placeholder Google CDN URL | High |
| Page is not in required IA — if retained, needs significant copy and positioning revision | Medium |

---

## 7. Jobseekers Page (`/jobseekers`)

### 7.1 Existing Implementation

- Hero: "Be the Face of Top Brands."
- "3 Steps to Your First Gig" process
- Perks: Top Brands, Flexible Work, Prompt Payouts
- Multi-step application form

### 7.2 Alignment with Documentation

**Not mentioned in required IA.** The documentation focuses exclusively on B2B audience. This page serves a B2C (talent recruitment) audience.

### 7.3 Gaps

| Gap | Severity |
|---|---|
| Not part of the approved IA — B2C audience dilutes B2B positioning | Medium |
| "Be the Face of Top Brands" — talent-casting language | Medium |
| "Chemistry Session" — casual slang for interview | Medium |
| "Get Booked" — entertainment industry language | Medium |
| "Drop Your Details" — overly casual | Medium |
| If retained, should be clearly demoted from primary navigation | Medium |
| Form action not connected to email/CRM (console.log only) | Medium |

---

## 8. Missing Pages

| Page | Priority |
|---|---|
| **Industries** (`/industries`) — 8–10 industry cards with descriptions. No client names. | High |
| **Why PromoPower** (`/why-promopower`) — Strongest trust page. 1,200–1,500 words. FAQs section. | High |
| 6× **Individual Service Pages** (`/services/[slug]`) | High |

---

## 9. Components Audit

### 9.1 NavBar (`/components/NavBar.tsx`)

**Existing:** Good implementation. Fixed, backdrop-blur, mobile overlay. Active state highlighting. Accessible aria labels on mobile button.

**Gaps:**

| Gap | Severity |
|---|---|
| Links to `Our Work & Talent` (wrong framing) | Medium |
| `Jobseekers` in primary nav dilutes B2B focus | Medium |
| "Plan a Campaign" CTA — minor copy misalignment | Low |
| No `Industries` or `Why PromoPower` links | High |
| Mobile overlay: focus trap not implemented (keyboard navigation gap) | Medium |

### 9.2 Footer (`/components/Footer.tsx`)

**Existing:** Good structure. Logo, copyright/legal, navigation, contact, social links.

**Gaps:**

| Gap | Severity |
|---|---|
| Missing approved company description paragraph | High |
| Missing approved tagline: "Professional Staffing Solutions For Promotions, Retail Activations And Customer Engagement Since 2002" | High |
| Missing approved closing statement: "Recruit. Prepare. Deploy. Support. Deliver." | Medium |
| Phone number appears to be placeholder: "+65 6123 4567" | Medium |
| No Industries or Why PromoPower links in footer navigation | Medium |
| `Our Work & Talent` label should be updated | Low |

### 9.3 Missing Components (required by documentation)

| Component | Description | Reuse Potential |
|---|---|---|
| `PromoPowerFramework` | 5-step horizontal/stacked timeline. Scroll-triggered. Desktop/tablet/mobile adaptive. | High — homepage + about + service pages |
| `ServiceCard` | Reusable card with title, description, icon, Learn More CTA, optional illustration | High — homepage + services page |
| `IndustryCard` | Industry name, description, icon. No client logos. | High — homepage + industries page |
| `TrustIndicatorCard` | Experience indicator with icon, title, description | High — homepage + why promopower |
| `StatCard` | Operational capability card (20+ years, multi-industry, etc.) | Medium |
| `FAQAccordion` | Expandable FAQ item | Medium — service pages + why promopower |

---

## 10. Design System

### 10.1 Current Design System

**Well-implemented.** `globals.css` defines a coherent theme:
- Primary: `#FF8C00` (amber orange)
- Background: `#121212`, Surface: `#1E1E1E`, CharcoalDark: `#0A0A0A`
- Fonts: Playfair Display (headline), Lora (body), Manrope (label)
- Motion: marquee animation, bokeh overlay, glow button, neon text glow

**This design system is a strength and should be preserved in full.**

### 10.2 Gaps

| Gap | Severity |
|---|---|
| No pull-quote or highlight panel utility class | Medium |
| No process-timeline CSS component | Medium |
| No stat-card component pattern | Medium |
| Light surface tokens exist (`surface-light`) but are used inconsistently across pages | Low |

---

## 11. SEO Implementation

### 11.1 Existing Strengths

- `layout.tsx` has global metadata: title, description, keywords, OG, Twitter
- Individual pages have per-page metadata
- `sitemap.ts` exists with 6 routes
- `robots.ts` exists
- Canonical URLs set per page
- `metadataBase` configured correctly

### 11.2 Gaps

| Gap | Severity |
|---|---|
| Global title: "PromoPower \| Premium Event Staffing" — should reflect "Professional Staffing Solutions" | High |
| Global description: "event staffing & brand talent agency" — incorrect brand positioning in search results | High |
| Keywords include "Talent Agency" — misrepresents the business category | High |
| OG title: "Premium Event Staffing in Singapore" — wrong positioning | High |
| Twitter title: same issue | Medium |
| Sitemap missing routes for `/industries`, `/why-promopower`, individual service pages | High |
| Sitemap `lastModified` hardcoded to `2026-04-20` — will become stale | Low |
| No structured data / JSON-LD for LocalBusiness or Service schema | Medium |

---

## 12. Accessibility

### 12.1 Existing Strengths

- Mobile nav has `role="dialog"`, `aria-modal="true"`, `aria-label`
- Contact form inputs have proper `<label>` elements (visible or `sr-only`)
- Images have `alt` attributes
- Color contrast in dark theme appears generally sufficient

### 12.2 Gaps

| Gap | Severity |
|---|---|
| Mobile nav overlay has no focus trap — tab key escapes overlay | High |
| Mobile nav toggle doesn't set `aria-expanded` | Medium |
| Video autoplay with no user control option (cognitive load and accessibility) | Medium |
| `<img>` tags used instead of Next.js `<Image>` on several pages (no lazy load, no format optimisation) | Medium |
| Marquee/ticker animation has no `prefers-reduced-motion` guard | Medium |
| Bokeh overlay and decorative blur elements have no `aria-hidden` | Low |
| Form validation messages not associated with inputs via `aria-describedby` | Medium |
| No `<main>` landmark skip target confirmed | Low |

---

## 13. Performance

### 13.1 Existing Strengths

- Next.js with App Router (server components, streaming)
- Google Fonts with `display: swap`
- Tailwind CSS (purged in production)
- Marquee uses `will-change-transform`
- Logo uses Next.js `<Image>` with priority

### 13.2 Gaps

| Gap | Severity |
|---|---|
| Hero video served from third-party CDN (mixkit.co) — no local fallback, no loading control | Medium |
| All portfolio/service images use external Google user content CDN — no control, potential 404 risk | High |
| Multiple `<img>` used instead of `<Image>` — no automatic WebP/AVIF conversion, no lazy loading | Medium |
| External Google Fonts loaded via `<link>` in `<head>` AND via `next/font` — potential duplicate load | Medium |
| Bvlgari background image (`/bvlgari-bg.png`) is unoptimized local PNG | Low |

---

## 14. Content & Brand Voice Audit

### 14.1 Prohibited Language Found in Codebase

The following language appears in the current implementation and is explicitly prohibited by `04_Brand_Editorial_Style_Guide.md`:

| Found Text | Location | Issue |
|---|---|---|
| "Radiant Talent" / "Radiant Execution" | homepage, services | Hype language |
| "kinetic human energy" | homepage hero | Agency jargon |
| "flawless on-site activations" | homepage, services | Overuse of "flawless" + activation framing |
| "elite roster" | homepage, jobseekers | Talent agency language |
| "Luminaries" | our-work | Invented brand term, not in approved copy |
| "Chemistry Session" | jobseekers | Casual slang |
| "Get Booked" | jobseekers | Entertainment industry framing |
| "Drop Your Details" | jobseekers | Overly casual |
| "turnkey talent solution" | contact | Agency jargon |
| "zero logistical friction" | our-work data | Marketing hype |
| "viral social media aesthetics" | our-work data | Not brand language |
| "monumental 75% increase" | our-work data | Invented metric |
| "Singapore's Premier Staffing" | homepage badge | Superlative ("premier") |
| "Make your brand unforgettable" | our-story | Generic agency language |

### 14.2 Approved Copy Not Used

None of the approved headline, body copy, or section copy from `05_Complete_Website_Copy_Master.md` appears to have been implemented. Every section uses different, unapproved copy.

---

## 15. Legal / Compliance Risks

| Risk | Location | Severity |
|---|---|---|
| Named clients in ticker tape without confirmed approval (Dior, Chanel, Guerlain, L'Oréal, Bacardi, etc.) | `app/page.tsx` — `eliteClients` array | **Critical** |
| Named clients in portfolio data (Tiger Beer, Dior, Chanel, Heineken, etc.) | `lib/data.ts` | **Critical** |
| Fabricated statistics in portfolio data (25,000 samples, 40% uplift, 60% increase, etc.) | `lib/data.ts` | **Critical** |
| Bvlgari branded background image (`/bvlgari-bg.png`) | `app/page.tsx` | **Critical** |
| Implied celebrity/VIP endorsements ("500+ daily VIPs", "viral social media aesthetics") | `lib/data.ts` | High |
| Named individual talent (Sarah, Marcus) — identifiable persons | `app/our-work/page.tsx` | Medium |

---

## 16. Implementation Roadmap

### Phase 1 — Critical Risk Remediation (Do First)

**Priority: Legal & compliance risk removal**

| Task | Complexity |
|---|---|
| Remove `eliteClients` ticker tape array and entire ticker section from homepage | Low |
| Remove or replace `PORTFOLIO_CAMPAIGNS` data — all named clients, all fabricated statistics | Low |
| Remove Bvlgari background image from homepage dual-CTA panel | Low |
| Replace fabricated case studies in `/our-work` with anonymised versions | Low |
| Remove named individual talent profiles (Sarah, Marcus) | Low |

---

### Phase 2 — SEO & Metadata Correction

**Priority: Fix brand positioning in search results**

| Task | Complexity |
|---|---|
| Update global metadata title, description, keywords in `layout.tsx` | Low |
| Update OG and Twitter card metadata | Low |
| Update per-page metadata on all pages | Low |
| Update `sitemap.ts` to include Industries, Why PromoPower, service sub-pages | Low |
| Add JSON-LD LocalBusiness schema to layout | Low |

---

### Phase 3 — Navigation & Architecture

**Priority: Align IA with documentation**

| Task | Complexity |
|---|---|
| Update NavBar links: add Industries, Why PromoPower | Low |
| Demote Jobseekers from primary nav (move to footer or secondary) | Low |
| Rename "Our Work & Talent" → "Our Work" (or remove from primary nav) | Low |
| Update CTA label to "Get In Touch" | Low |
| Create route stubs for `/industries`, `/why-promopower`, `/services/[slug]` | Low |

---

### Phase 4 — Component Development

**Priority: Build reusable components required across pages**

| Task | Complexity |
|---|---|
| Build `PromoPowerFramework` component (5-step, responsive, scroll-animated) | Medium |
| Build `ServiceCard` component with approved structure | Low |
| Build `IndustryCard` component with icon + description | Low |
| Build `TrustIndicatorCard` component | Low |
| Build `FAQAccordion` component | Low |
| Build `ContactCTA` section component | Low |

---

### Phase 5 — Homepage Rebuild

**Priority: Implement approved content and sections**

| Task | Complexity |
|---|---|
| Replace hero video with approved visual (abstract/atmospheric) | Medium |
| Replace hero copy with approved copy from 05_Complete_Website_Copy_Master.md | Low |
| Replace CTAs with approved labels | Low |
| Add trust signal row to hero | Low |
| Replace ticker tape with Trust & Credibility two-column section | Medium |
| Add "More Than Staffing" section with approved copy | Low |
| Add PromoPower Framework section (using new component) | Medium |
| Update Services section to 6 cards with approved copy | Low |
| Add Industries section (using new component) | Medium |
| Add Why PromoPower section | Medium |
| Add Proof & Confidence section | Low |
| Replace dual-panel CTA with single Contact CTA section | Low |
| Update Footer with approved copy and tagline | Low |

---

### Phase 6 — About Page Rebuild

**Priority: Replace minimal stub with approved long-form content**

| Task | Complexity |
|---|---|
| Replace hero with approved headline | Low |
| Remove Harvey Mackay quote | Low |
| Write/insert approved Company Story narrative (~400 words) | Medium |
| Add Our Philosophy section | Low |
| Add What We Believe section | Low |
| Add How We Work section with PromoPowerFramework component | Low |
| Add Why Experience Matters section | Low |
| Add Contact CTA | Low |
| Consider renaming route to `/about` | Low |

---

### Phase 7 — Services Rebuild

**Priority: Align content and expand to 6 services**

| Task | Complexity |
|---|---|
| Update hero copy with approved language | Low |
| Add 3 missing services (Product Promoters, Event Personnel, Retail Activation Teams, Roadshows, Campaign Support) | Medium |
| Update all service copy to approved versions from 05_Complete_Website_Copy_Master.md | Low |
| Create 6 individual service sub-pages with full structure | High |
| Replace Success Principles section with approved brand pillars content | Low |
| Update CTA copy | Low |

---

### Phase 8 — New Pages

**Priority: Create Industries and Why PromoPower pages**

| Task | Complexity |
|---|---|
| Create `/industries` page with 10 industry cards | Medium |
| Create `/why-promopower` page (~1,400 words) with all required sections | High |
| Add FAQs to Why PromoPower page | Medium |

---

### Phase 9 — Contact Page Update

**Priority: Align copy and form to approved requirements**

| Task | Complexity |
|---|---|
| Update heading/subheading to approved copy | Low |
| Update form framing — remove talent-type first step | Medium |
| Add message/requirements textarea for consultative enquiries | Low |
| Add business hours | Low |
| Add response time expectation ("We aim to respond within one business day") | Low |
| Connect form to email delivery (Resend, SendGrid, or similar) | High |

---

### Phase 10 — Accessibility & Performance

| Task | Complexity |
|---|---|
| Add focus trap to mobile navigation overlay | Medium |
| Add `aria-expanded` to mobile nav toggle | Low |
| Add `prefers-reduced-motion` guard to marquee (if retained) | Low |
| Replace `<img>` tags with Next.js `<Image>` across all pages | Medium |
| Source or commission local visual assets to replace external CDN dependencies | High |
| Remove duplicate Google Fonts `<link>` from `<head>` | Low |

---

## 17. Summary Scorecard

| Dimension | Current State | Required State | Gap |
|---|---|---|---|
| Brand positioning | Event talent agency | B2B workforce partner | Fundamental misalignment |
| Homepage content | ~30% aligned | Fully approved copy | ~70% missing or wrong |
| Navigation IA | 6 routes, 2 wrong | 7 routes + service subs | 3 pages missing entirely |
| Services | 3 services, 0 sub-pages | 6 services + 6 sub-pages | Major |
| About page | ~15% aligned | 1,200–1,500 words, 7 sections | Major |
| Industries page | Absent | Full page | Missing entirely |
| Why PromoPower page | Absent | Full page (highest trust) | Missing entirely |
| Legal compliance | Multiple critical risks | Zero client names, zero fabricated stats | Critical failures |
| SEO metadata | Wrong positioning | Aligned with brand | Needs full update |
| Trust signals | Awards-only | 6 operational trust indicators + narrative | Incomplete |
| PromoPower Framework | Absent | Core reusable component | Missing entirely |
| Accessibility | Partially compliant | Fully compliant | 5 items to address |
| Approved copy | 0% implemented | 100% from master document | Not started |

---

## 18. Recommended Implementation Priority

```
CRITICAL  → Phase 1 (Legal risk) + Phase 2 (SEO)
HIGH      → Phase 3 (Nav) + Phase 4 (Components) + Phase 5 (Homepage)
HIGH      → Phase 6 (About) + Phase 7 (Services)
MEDIUM    → Phase 8 (New pages) + Phase 9 (Contact)
LOW       → Phase 10 (Accessibility/Performance polish)
```

The most important single action is **Phase 1** — removing named client references and fabricated statistics, which represent live legal and reputational risks. The most strategically important action is **Phase 5** — the homepage rebuild — as it is the primary visitor touchpoint and is currently misrepresenting the brand in its positioning, copy, and visual direction.
