# GEO Audit Report: www.mentlabs.de

**Date:** 2026-03-17
**Business Type:** Professional Portfolio / Freelance Consultant
**Pages Analyzed:** 3 (Homepage, /impressum, /privacy)
**Site Architecture:** Next.js App Router with Static Export (SSG)

---

## Composite GEO Score: 55/100 (Fair)

```
 0        25        50        75       100
 |---------|---------|---------|---------|
 ██████████████████████████████░░░░░░░░░░  55/100
```

| Category | Weight | Score | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 52/100 | 13.0 | Fair |
| Brand Authority Signals | 20% | 18/100 | 3.6 | Critical |
| Content Quality & E-E-A-T | 20% | 68/100 | 13.6 | Good |
| Technical Foundations | 15% | 88/100 | 13.2 | Good |
| Structured Data | 10% | 62/100 | 6.2 | Fair |
| Platform Optimization | 10% | 49/100 | 4.9 | Poor |
| **Composite** | **100%** | | **54.5 (~55)** | **Fair** |

### AI Platform Readiness

| Platform | Score | Status |
|---|---|---|
| ChatGPT Web Search | 50/100 | Fair |
| Bing Copilot | 48/100 | Poor |
| Google Gemini | 45/100 | Poor |
| Google AI Overviews | 42/100 | Poor |
| Perplexity AI | 40/100 | Poor |

---

## Executive Summary

The site has **excellent technical infrastructure** (88/100) -- static HTML rendering, all AI crawlers explicitly allowed, strong security headers, and well-implemented structured data. These foundations put it ahead of most websites.

However, the two factors that matter most for AI citation -- **content citability** (42/100) and **brand mentions** (18/100) -- are critically weak. The fundamental issue: AI models cite sources that provide authoritative answers to questions. A portfolio page with brief, self-referential content gives AI models no reason to reference it for any general query.

**The path from 55 to 75+ requires creating original, in-depth content and building a third-party mention footprint.**

---

## What's Working Well

1. **AI Crawler Access (100/100)** -- Best-in-class robots.txt with all major AI crawlers explicitly allowed
2. **Technical Infrastructure (88/100)** -- Static HTML via Next.js SSG, fast loading, strong security headers
3. **Person Schema** -- Comprehensive structured data with credentials, skills, and cross-references
4. **llms.txt (72/100)** -- Present and well-formatted (ahead of 95%+ of websites)
5. **Human-quality content** -- Authentic voice, verifiable credentials, progressive career narrative
6. **Privacy-conscious** -- Cookie-free analytics, self-hosted fonts, GDPR-compliant privacy policy
7. **Security headers (95/100)** -- All 6 recommended headers properly configured (HSTS, CSP, X-Frame-Options, etc.)

---

## Key Findings by Category

### 1. AI Citability & Visibility (52/100)

| Component | Score |
|---|---|
| AI Crawler Access | 100/100 |
| llms.txt Compliance | 72/100 |
| Passage Citability | 42/100 |
| Brand Mentions | 18/100 |

**AI Crawler Access (100/100):** Every major AI crawler is explicitly allowed in robots.txt -- GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, Cohere-ai.

**Citability weaknesses:**
- No standalone "what is" or "how to" explanatory content (15/100)
- Skill lists lack contextual depth -- bare lists are never cited (20/100)
- Project descriptions too brief for citation (25/100)
- No quantified achievements with metrics (18/100)
- No blog/article content (10/100)

**Best citable passages (current):**
1. Master's thesis + Zero Trust description: 58/100
2. Security Architecture Trainee at LLB: 55/100
3. Professional introduction paragraph: 48/100

### 2. Brand Authority Signals (18/100)

| Platform | Status | Impact |
|---|---|---|
| Wikipedia / Wikidata | Absent | Critical gap for entity recognition |
| Reddit | Absent | No discussions found |
| YouTube | Absent | No channel or videos |
| LinkedIn | Present | Profile confirmed and linked |
| GitHub | Minimal | 14 repos, 11 followers |
| Credly/TryHackMe | Minimal | Badges exist but not discoverable via search |
| Industry Press | Absent | No mentions on tech blogs, news, conferences |
| Stack Overflow / Forums | Absent | No attributable answers |

### 3. Content Quality & E-E-A-T (68/100)

| Dimension | Score | Key Evidence |
|---|---|---|
| Experience | 18/25 | 7 side projects on GitHub, 6 progressive roles, master thesis with PoC |
| Expertise | 19/25 | M.Sc. (IT Security), CompTIA CySA+, correct specialized terminology |
| Authoritativeness | 14/25 | Verifiable credentials via Credly, linked profiles; no external endorsements |
| Trustworthiness | 15/25 | HTTPS, Impressum, GDPR privacy policy; missing street address (TMG requirement) |

**AI Content Assessment:** Highly Likely Human -- strong authorship signals, first-person voice, specific companies/tools/dates, personality in tagline.

**Topical Authority:** Moderate -- single-page portfolio inherently cannot demonstrate deep topical authority without blog, case studies, or resource pages.

### 4. Technical Foundations (88/100)

| Area | Score | Status |
|---|---|---|
| Server-Side Rendering | 95/100 | Excellent (Next.js SSG) |
| Security Headers | 95/100 | Excellent |
| Response & Status | 95/100 | Good |
| Meta Tags & Indexability | 90/100 | Good |
| URL Structure | 90/100 | Good |
| Mobile Optimization | 85/100 | Good |
| Core Web Vitals Risk | 80/100 | Fair (CLS risk from missing image dimensions) |
| Crawlability | 78/100 | Fair (incomplete sitemap, canonical issues) |

**Issues found:**
- Profile image missing width/height attributes (CLS risk)
- Sitemap has only 1 URL (/impressum, /privacy missing)
- Canonical on legal pages incorrectly points to homepage
- Two H1 tags on homepage (should consolidate)
- `images: { unoptimized: true }` in next.config.js
- CSP allows `'unsafe-inline'` for scripts

### 5. Structured Data (62/100)

**Detected schemas:** Person, ProfilePage, WebSite (all JSON-LD, all valid)

**Strengths:**
- Person schema comprehensive: jobTitle, knowsAbout (16), knowsLanguage, hasCredential (3), sameAs (4), alumniOf (2)
- Proper @id cross-referencing between schemas
- speakable property on ProfilePage (live site)

**Gaps:**
- No Organization/ProfessionalService schema for "mentlabs" brand (biggest gap)
- sameAs missing Wikipedia, Wikidata, XING, Twitter/X
- speakable property missing from source code (will be lost on next deploy!)
- worksFor missing URL for LEAPTER GmbH
- No BreadcrumbList for legal pages

### 6. Platform Optimization (49/100)

| Platform | Score | Biggest Gap |
|---|---|---|
| ChatGPT Web Search | 50/100 | No Wikipedia/Wikidata entity |
| Bing Copilot | 48/100 | No IndexNow, no Bing Webmaster verification |
| Google Gemini | 45/100 | No YouTube, no Google Scholar, no multi-modal content |
| Google AI Overviews | 42/100 | No question-based headings, no FAQPage schema |
| Perplexity AI | 40/100 | No community presence (Reddit, Stack Overflow) |

---

## Prioritized Action Plan

### Quick Wins (Low Effort, High Impact) -- Do This Week

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | **Create Wikidata entity** for Moritz Nentwig (occupation, employer, education, certifications, website) and add URL to sameAs | Brand +15, Platform +5 | Low |
| 2 | **Fix speakable property in source code** -- add to StructuredData.jsx before next deploy | Schema +3 | Low |
| 3 | **Add Organization/ProfessionalService schema** for mentlabs brand | Schema +8 | Low |
| 4 | **Add visible "Last updated" date and author attribution** to rendered HTML | Citability +5, Platform +3 | Low |
| 5 | **Add width/height to profile image** (280x280) to prevent CLS | Technical +2 | Low |
| 6 | **Implement IndexNow protocol** -- add API key to /public, ping on deploy | Platform +3 | Low |
| 7 | **Fix sitemap** -- include all indexable pages | Technical +3 | Low |
| 8 | **Fix canonical tags** on /impressum and /privacy (self-referencing) | Technical +2 | Low |
| 9 | **Consolidate to single H1** tag | Content +1 | Low |
| 10 | **Expand sameAs** -- add XING, Wikidata, any other profiles | Schema +3 | Low |

### Medium-Term (1-4 Weeks)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 11 | **Add blog/articles section** with 3-5 in-depth posts (Zero Trust, container security, incident response) | Citability +20, Authority +10 | High |
| 12 | **Add question-based headings** with answer-target paragraphs + FAQPage schema | Citability +8, Platform +5 | Medium |
| 13 | **Rewrite experience as quantified achievements** (e.g., "Resolved 50+ security incidents across banking infrastructure") | Citability +10, Content +5 | Medium |
| 14 | **Expand project descriptions** with methodology, outcomes, lessons learned | Citability +5, Content +3 | Medium |
| 15 | **Create llms-full.txt** with comprehensive content | AI Visibility +5 | Medium |
| 16 | **Add physical address to Impressum** (TMG Section 5 legal requirement) | Trust +3 | Low |
| 17 | **Add detailed case study** (Zero Trust thesis PoC or Container Security Governance) | Content +5, Citability +5 | Medium |

### Strategic (1-3 Months)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 18 | **Build Reddit presence** -- post to r/netsec, r/cybersecurity, r/devops | Brand +15 | High |
| 19 | **Create YouTube channel** with 2-3 technical videos | Brand +10, Platform +8 | High |
| 20 | **Create Google Scholar profile** linking to master thesis | Platform +5 | Medium |
| 21 | **Contribute to Stack Overflow / security forums** | Brand +8 | High |
| 22 | **Cross-post to Medium/dev.to** for wider AI training footprint | Brand +5, Citability +5 | Medium |
| 23 | **Seek speaking engagements or guest posts** on security blogs | Brand +10, Authority +8 | High |

---

## Projected Score Improvement

| Milestone | Actions | Estimated Score |
|---|---|---|
| **Current** | -- | **55/100** |
| **After Quick Wins** (1 week) | #1-10 | **~62/100** |
| **After Content Strategy** (1 month) | #11-17 | **~70/100** |
| **After Brand Building** (3 months) | #18-23 | **~78/100** |

---

## Critical Gaps Summary

1. **No citable content** -- Portfolio descriptions are too brief for AI citation; no blog or articles
2. **Near-zero brand mentions** -- Absent from Reddit, YouTube, Wikipedia, industry publications
3. **No Wikidata entity** -- The easiest, highest-impact action for AI entity recognition
4. **Single-page architecture** -- AI platforms prefer citing specific, focused pages over monolithic portfolios
5. **No quantified achievements** -- AI models strongly prefer passages with concrete metrics
6. **Organization schema missing** -- The "mentlabs" brand has no structured data identity

---

## Methodology

This audit was conducted by 5 specialized analysis agents running in parallel:

1. **AI Visibility Agent** -- Citability scoring, AI crawler access, llms.txt, brand mentions
2. **Platform Analysis Agent** -- Google AIO, ChatGPT, Perplexity, Gemini, Bing Copilot readiness
3. **Technical SEO Agent** -- Crawlability, security, performance, SSR, Core Web Vitals
4. **Content Quality Agent** -- E-E-A-T signals, content depth, readability, topical authority
5. **Schema Markup Agent** -- Structured data detection, validation, JSON-LD generation

### Scoring Weights

| Category | Weight | Measured By |
|---|---|---|
| AI Citability & Visibility | 25% | Passage scoring, answer block quality, AI crawler access |
| Brand Authority Signals | 20% | Mentions on Reddit, YouTube, Wikipedia, LinkedIn; entity presence |
| Content Quality & E-E-A-T | 20% | Expertise signals, original data, author credentials |
| Technical Foundations | 15% | SSR, Core Web Vitals, crawlability, mobile, security |
| Structured Data | 10% | Schema completeness, JSON-LD validation, rich result eligibility |
| Platform Optimization | 10% | Platform-specific readiness (Google AIO, ChatGPT, Perplexity) |

---

*Generated by GEO Audit Tool -- Claude Code*
*Audit completed: 2026-03-17*
*Previous audit: 2026-03-16 (score: 33/100 -- pre-Next.js migration)*
