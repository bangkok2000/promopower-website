PROMOPOWER WEBSITE TECHNICAL IMPLEMENTATION GUIDE v1.0

Purpose

This document provides implementation instructions for developers and AI coding assistants working on the PromoPower website.

The purpose is to improve content, UX, conversion performance and information architecture while preserving the quality of the current website under development.

This document must be read together with:

01_Strategy_and_Content_Blueprint.md

02_UX_Design_Conversion_Specification.md

All implementation decisions must align with those documents.

⸻

PRIMARY OBJECTIVE

Enhance the existing website.

Do not redesign the website.

Do not rebuild the website.

Do not replace the design system.

Do not replace the component architecture.

The current website already contains strong visual foundations.

The objective is to elevate:

* Trust
* Credibility
* Content quality
* Information architecture
* User journey
* Conversion effectiveness

while preserving existing strengths.

⸻

MANDATORY REVIEW PROCESS

Before modifying any code:

Step 1

Review entire codebase.

Understand:

* folder structure
* routing structure
* page architecture
* component architecture
* design system
* animation system
* styling methodology
* responsive implementation

Document findings.

⸻

Step 2

Identify reusable components.

Do not create duplicate components if existing components can be extended.

⸻

Step 3

Map existing sections to proposed sections.

Example:

Current Hero
→ Enhanced Hero

Current Services
→ Expanded Services

Current About
→ Expanded About

Current CTA
→ Enhanced CTA

⸻

Step 4

Create implementation plan.

Do not write code before understanding the architecture.

⸻

NON-NEGOTIABLE PRESERVATION RULES

The following must remain intact unless absolutely necessary.

Design System

Preserve:

Typography

Spacing system

Colour system

Motion system

Grid system

Card system

Component styling

Visual language

⸻

Technical Architecture

Preserve:

Framework

Routing

Build configuration

Deployment configuration

SEO structure

Performance optimisations

Accessibility implementation

Existing integrations

⸻

User Experience

Preserve:

Navigation behaviour

Page transitions

Responsive behaviour

Animation quality

Loading performance

Accessibility standards

⸻

IMPLEMENTATION STRATEGY

Phase 1

Content Architecture

Update:

Homepage structure

About page structure

Services structure

Industries structure

Why PromoPower structure

Contact page structure

No design changes yet.

Focus only on structure.

⸻

Phase 2

Content Integration

Insert content from:

01_Strategy_and_Content_Blueprint.md

Do not generate replacement content.

Use approved content.

Only generate missing supporting content where required.

⸻

Phase 3

UX Enhancement

Improve:

Hierarchy

Readability

Scannability

Navigation cues

Visual storytelling

Conversion paths

Without changing overall design language.

⸻

Phase 4

Visual Enhancement

Add:

Process diagrams

Trust sections

Industry sections

Capability sections

Framework sections

without redesigning pages.

⸻

Phase 5

QA

Perform complete review.

⸻

HOMEPAGE IMPLEMENTATION

Target Flow:

Hero

↓

Trust & Credibility

↓

More Than Staffing

↓

PromoPower Framework

↓

Services

↓

Industries

↓

Why PromoPower

↓

Proof & Confidence

↓

Contact CTA

↓

Footer

⸻

HERO IMPLEMENTATION

Retain existing premium aesthetic.

Remove:

Festival imagery

Concert imagery

Entertainment-focused visuals

Replace with:

Abstract activation visuals

Retail-inspired visuals

Professional workforce visuals

Brand engagement concepts

Customer interaction concepts

without showing identifiable individuals.

⸻

TRUST SECTION IMPLEMENTATION

Create dedicated credibility section.

Must include:

Established Since 2002

MOM Licensed Employment Agency

Professional Staffing Solutions

End-to-End Workforce Support

Operational Coordination

Multi-Industry Experience

Display as premium cards.

Not plain bullet points.

⸻

PROMOPOWER FRAMEWORK IMPLEMENTATION

Create reusable component.

Framework:

Recruit

Prepare

Deploy

Support

Review

Requirements:

Desktop timeline layout.

Tablet adaptive layout.

Mobile stacked layout.

Animation:

Reveal on scroll.

Component must be reusable throughout website.

⸻

SERVICES IMPLEMENTATION

Create reusable service card component.

Component should support:

Title

Description

Icon

Learn More CTA

Optional illustration

Optional expanded content

All services must use same component.

⸻

INDUSTRIES IMPLEMENTATION

Create reusable industry component.

Supports:

Industry Name

Industry Description

Icon

Optional CTA

Must not use client logos.

Must not reference specific clients.

⸻

WHY PROMOPOWER IMPLEMENTATION

Create dedicated trust component system.

Supports:

Headline

Supporting narrative

Feature cards

Statistics cards

Capability highlights

Expandable content

Component must be reusable on homepage and dedicated page.

⸻

PROOF & CONFIDENCE IMPLEMENTATION

Replace traditional client logo section.

Purpose:

Demonstrate credibility without copyright risks.

Use:

Experience

Process

Industry breadth

Capabilities

Operational strengths

Never use:

Client logos

Client trademarks

Client branding

Without explicit approval.

⸻

VISUAL ASSET RULES

Avoid:

Client logos

Client product packaging

Celebrity imagery

Campaign photography with identifiable people

Third-party copyrighted imagery

Watermarked stock photography

⸻

Preferred assets:

Custom illustrations

Abstract engagement visuals

Process graphics

Workforce diagrams

Branded iconography

Environmental imagery

Architectural photography

Atmospheric imagery

⸻

CONTENT IMPLEMENTATION RULES

Never shorten approved copy without reason.

Do not replace approved content with AI-generated summaries.

Respect content hierarchy.

Maintain reading rhythm.

Preserve:

Headlines

Subheadings

Supporting copy

Narrative structure

Trust-building flow

⸻

RESPONSIVE IMPLEMENTATION

Desktop

Tablet

Mobile

Must all be reviewed separately.

No desktop-first assumptions.

No content overflow.

No text truncation.

No broken layouts.

⸻

ACCESSIBILITY REQUIREMENTS

Maintain or improve existing standards.

Requirements:

Semantic HTML

ARIA labels

Keyboard navigation

Screen reader compatibility

Colour contrast compliance

Focus states

Accessible forms

Accessible animations

⸻

PERFORMANCE REQUIREMENTS

Performance must not degrade.

Maintain:

Image optimisation

Lazy loading

Code splitting

Caching

Bundle optimisation

Animation efficiency

Do not introduce heavy dependencies.

⸻

SEO REQUIREMENTS

Preserve existing SEO.

Enhance:

Page titles

Meta descriptions

Heading structure

Schema markup

Internal linking

Content depth

Keyword coverage

Do not remove existing ranking signals.

⸻

FORM IMPLEMENTATION

Contact forms must:

Validate correctly

Provide feedback

Handle errors gracefully

Support mobile users

Maintain accessibility

Remain simple

⸻

QUALITY ASSURANCE CHECKLIST

Before completion verify:

Homepage complete

About page complete

Services complete

Industries complete

Why PromoPower complete

Contact complete

Navigation functional

Forms functional

Animations functional

Responsive layouts functional

SEO intact

Accessibility intact

Performance intact

No console errors

No build errors

No linting errors

No broken links

No placeholder content

No lorem ipsum

No incomplete sections

⸻

FINAL ACCEPTANCE TEST

The final website should feel:

Professional

Established

Trustworthy

Operationally capable

Premium

Approachable

Human

Visitors should leave believing:

PromoPower understands staffing.

PromoPower understands activations.

PromoPower has significant experience.

PromoPower can be trusted.

PromoPower is worth contacting.

If these outcomes are achieved, implementation is successful.

⸻

CURSOR EXECUTION RULE

Before making any changes:

Read:

01_Strategy_and_Content_Blueprint.md

02_UX_Design_Conversion_Specification.md

03_Technical_Implementation_Guide.md

Treat these documents as mandatory implementation requirements.

Do not improvise major design, content or architectural decisions without first confirming alignment with these documents.

Preserve existing strengths.

Enhance where necessary.

Never sacrifice trust, usability or performance in pursuit of visual novelty.