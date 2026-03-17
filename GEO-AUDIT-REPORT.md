# GEO Audit Report: www.mentlabs.de

**Audit Date:** 2026-03-16
**Target URL:** https://www.mentlabs.de/
**Business Type:** Personal Portfolio / Freelance (Software Developer & Security Engineer)
**Site Architecture:** React SPA (Vite, Client-Side Rendered)

---

## Composite GEO Score: 33/100 — Poor

```
 0        25        50        75       100
 |---------|---------|---------|---------|
 ████████████████░░░░░░░░░░░░░░░░░░░░░░░  33/100
```

### Score Breakdown

| Category | Weight | Score | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 35/100 | 8.75 | Poor |
| Brand Authority Signals | 20% | 12/100 | 2.40 | Critical |
| Content Quality & E-E-A-T | 20% | 34/100 | 6.80 | Poor |
| Technical Foundations | 15% | 42/100 | 6.30 | Poor |
| Structured Data | 10% | 52/100 | 5.20 | Fair |
| Platform Optimization | 10% | 37/100 | 3.70 | Poor |
| **Composite** | **100%** | | **33.15** | **Poor** |

### AI Platform Readiness

| Platform | Score | Status |
|---|---|---|
| Bing Copilot | 42/100 | Fair |
| Google Gemini | 38/100 | Poor |
| ChatGPT Web Search | 35/100 | Poor |
| Google AI Overviews | 32/100 | Poor |
| Perplexity AI | 28/100 | Critical |

---

## Root Cause: The SPA Rendering Wall

**The single most critical finding across all 5 audit dimensions is the same: the site is a client-side rendered React SPA.** This one architectural decision cascades into every score:

- **AI crawlers see an empty page.** GPTBot, ClaudeBot, PerplexityBot, and others do NOT execute JavaScript. They fetch `https://www.mentlabs.de/` and receive `<div id="root"></div>` — nothing else.
- **Structured data is invisible.** The Person, ProfilePage, and WebSite JSON-LD schemas are rendered by React, not present in the initial HTML. AI crawlers and Google's first-pass indexer miss them entirely.
- **Content cannot be cited if it can't be read.** Every skill, certification, project, and experience entry exists only in JavaScript bundles.
- **The noscript fallback is insufficient** — ~30 words vs. hundreds in the full site.

> Fixing this single issue would improve the composite GEO score by an estimated **15-20 points**.

---

## Key Findings by Category

### 1. AI Citability & Visibility (35/100)

| Component | Score |
|---|---|
| Passage Citability | 32/100 |
| AI Crawler Access (permission) | 100/100 |
| AI Crawler Access (effective, adjusted for SPA) | 80/100 |
| llms.txt Compliance | 0/100 |

**Top issues:**
- No `llms.txt` file exists (404)
- Content is structured as resume bullet points, not quotable answer blocks
- No quantified achievements or statistical claims for AI to cite
- No FAQ or question-answering content patterns
- SPA architecture makes all content functionally inaccessible to AI crawlers

### 2. Brand Authority Signals (12/100)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Absent |
| Reddit | Absent |
| YouTube | Absent |
| LinkedIn | Present (profile linked) |
| GitHub | Present (14 repos, 11 followers) |
| TryHackMe | Present (niche platform) |
| Credly | Present (CySA+ badge) |
| News / Tech Publications | Absent |
| Industry Review Sites | Absent |

**Top issues:**
- Zero presence on platforms AI models heavily weight (Wikipedia, Reddit, YouTube)
- No third-party content mentioning "Moritz Nentwig" or "mentlabs"
- GitHub bio is outdated ("master student" — degree completed 2024)
- No community contributions (Stack Overflow, forum posts, blog articles)

### 3. Content Quality & E-E-A-T (34/100)

| Dimension | Score |
|---|---|
| Experience | 8/25 |
| Expertise | 12/25 |
| Authoritativeness | 7/25 |
| Trustworthiness | 14/25 |

**Top issues:**
- ~650 words total body content — classified as **thin content**
- No blog, articles, case studies, or technical write-ups
- Project descriptions are 1-2 sentences each — superficial, not experiential
- No quantified outcomes ("reduced incidents by X%", "processed Y transactions")
- Missing privacy policy / Impressum (legally required for German websites)
- LEAPTER entry says "Starting January 2026" — now stale
- OG image commented out — no social sharing preview

**Strengths:**
- Real credentials present (M.Sc., CompTIA CySA+, named employers)
- Heading hierarchy is technically correct
- Human-written content (not AI-generated)

### 4. Technical Foundations (42/100)

| Area | Score | Status |
|---|---|---|
| Security Headers | 95/100 | Excellent |
| URL Structure | 85/100 | Good |
| Response & Status | 90/100 | Good |
| Meta Tags & Indexability | 78/100 | Fair |
| Mobile Optimization | 75/100 | Good |
| Crawlability | 65/100 | Fair |
| Core Web Vitals Risk | 40/100 | Poor |
| Server-Side Rendering | 10/100 | Critical |

**Strengths:**
- Security headers are exemplary (HSTS with preload, CSP, X-Frame-Options DENY, Permissions-Policy)
- HTTPS with HTTP/2
- Responsive design with proper breakpoints
- Mobile hamburger menu with ARIA labels

**Top issues:**
- Client-side rendering (Critical — content invisible to crawlers)
- Profile image missing HTML width/height attributes (CLS risk)
- Meta description 247 chars (87 over recommended 160)
- Title tag 72 chars (12 over recommended 60)
- No preload hints for critical resources
- No hreflang tags (.de domain serving English content)

### 5. Structured Data (52/100)

| Schema | Status | Issues |
|---|---|---|
| Person | Present | Image URL broken (Vite import), jobTitle is array, missing description/email, sameAs incomplete |
| ProfilePage | Present | Missing url and name properties |
| WebSite | Present | Missing SearchAction (acceptable for portfolio) |
| Organization | Missing | No entity for "MentLabs" |
| BreadcrumbList | Missing | |
| speakable | Missing | |
| FAQPage | Missing | |

**Critical issue:** All schemas are rendered by React (client-side), making them invisible to AI crawlers and Google's first-pass indexer. The schemas need to be moved to static `<script>` tags in `index.html`.

### 6. Platform Optimization (37/100)

**Cross-platform gaps:**
- No IndexNow support (hurts Bing Copilot)
- No YouTube presence (hurts Google Gemini)
- No community validation (hurts Perplexity)
- No question-based content patterns (hurts Google AI Overviews)
- No Wikipedia/Wikidata entity (hurts ChatGPT entity recognition)

---

## Prioritized Action Plan

### Quick Wins (Low effort, high impact) — Do This Week

| # | Action | Impact | Effort | Affects |
|---|---|---|---|---|
| 1 | **Create `/llms.txt`** in `public/` directory | +10-15 pts AI Visibility | 30 min | ChatGPT, Perplexity, Gemini |
| 2 | **Move JSON-LD schemas from `StructuredData.jsx` into `index.html` `<head>`** | +8-12 pts Schema, Technical | 1 hour | All platforms |
| 3 | **Uncomment og:image and twitter:image** meta tags, create OG image | +3-5 pts across categories | 1 hour | All platforms |
| 4 | **Shorten meta description** to <160 chars | +2 pts Technical | 10 min | Google, Bing |
| 5 | **Fix Person schema**: absolute image URL, single jobTitle string, add description + email, add Credly to sameAs | +5-8 pts Schema | 30 min | All platforms |
| 6 | **Consolidate robots.txt** duplicate User-agent blocks | +1 pt Technical | 5 min | All crawlers |
| 7 | **Update stale content**: LEAPTER "Starting January 2026" → actual responsibilities | +2 pts Content | 15 min | All platforms |

### Medium-Term (1-4 weeks)

| # | Action | Impact | Effort | Affects |
|---|---|---|---|---|
| 8 | **Implement SSR/SSG** (Next.js, Astro, or vite-ssg plugin) | +15-20 pts composite | 1-2 weeks | ALL — this is the #1 priority |
| 9 | **Add privacy policy / Impressum** (legally required in Germany) | +3-5 pts Trust | 2 hours | Trust signals |
| 10 | **Expand noscript fallback** with full content (interim fix until SSR) | +5-8 pts if SSR delayed | 2 hours | AI crawlers |
| 11 | **Add explicit AI bot rules** in robots.txt (GPTBot, ClaudeBot, PerplexityBot) | +2 pts Crawlers | 15 min | AI platforms |
| 12 | **Implement IndexNow** protocol for Bing | +3-5 pts Bing Copilot | 1 hour | Bing Copilot |
| 13 | **Add quantified achievements** to all experience entries | +5-8 pts Content, Citability | 2 hours | All platforms |
| 14 | **Add speakable property** to ProfilePage schema | +3 pts Schema | 15 min | Voice AI |
| 15 | **Add hreflang tag** for English on .de domain | +1-2 pts Technical | 10 min | Google |

### Strategic (1-3 months)

| # | Action | Impact | Effort | Affects |
|---|---|---|---|---|
| 16 | **Publish 3-5 technical blog posts** (Zero Trust, container security, incident response) at 1500+ words each | +15-25 pts Content, Citability, Authority | High | ALL — second highest priority |
| 17 | **Expand project entries into detailed case studies** (800-1500 words each) | +8-12 pts Content, Citability | Medium | All platforms |
| 18 | **Build Reddit presence** in r/netsec, r/cybersecurity with quality contributions | +5-10 pts Brand, Perplexity | Ongoing | Perplexity, ChatGPT |
| 19 | **Create YouTube channel** with 2-3 technical demo videos | +5-8 pts Brand, Gemini | Medium | Gemini, Google AIO |
| 20 | **Answer Stack Overflow questions** on security topics | +3-5 pts Brand | Ongoing | Perplexity, ChatGPT |
| 21 | **Optimize LinkedIn profile** completeness and activity | +2-3 pts Brand | 1 hour | Bing Copilot, ChatGPT |
| 22 | **Update GitHub bio** from "master student" to current title | +1 pt Brand | 5 min | All platforms |

---

## Projected Score Improvement

| Milestone | Actions | Estimated Score |
|---|---|---|
| **Current** | — | **33/100** |
| **After Quick Wins** (1 week) | #1-7 | **45-50/100** |
| **After SSR Migration** (1 month) | #8-15 | **58-65/100** |
| **After Content Strategy** (3 months) | #16-22 | **72-80/100** |

---

## Methodology

This audit was conducted by 5 specialized analysis agents running in parallel:

1. **AI Visibility Agent** — Citability scoring, AI crawler access, llms.txt, brand mentions
2. **Platform Analysis Agent** — Google AIO, ChatGPT, Perplexity, Gemini, Bing Copilot readiness
3. **Technical SEO Agent** — Crawlability, security, performance, SSR, Core Web Vitals
4. **Content Quality Agent** — E-E-A-T signals, content depth, readability, topical authority
5. **Schema Markup Agent** — Structured data detection, validation, JSON-LD generation

### Scoring Weights
| Category | Weight |
|---|---|
| AI Citability & Visibility | 25% |
| Brand Authority Signals | 20% |
| Content Quality & E-E-A-T | 20% |
| Technical Foundations | 15% |
| Structured Data | 10% |
| Platform Optimization | 10% |

---

*Generated by GEO Audit Tool — Claude Code*
*Audit completed: 2026-03-16*
