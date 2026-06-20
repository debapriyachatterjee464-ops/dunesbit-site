# DunesBit Landing Page Documentation

## 1. Project Overview

Build a high-quality, premium landing/main website for **DunesBit** at:

```txt
https://dunesbit.com
```

DunesBit is a modern software brand focused on building premium digital products, developer tools, Minecraft server plugins, AI-powered creation tools, dashboards, automation systems, and creator-focused software.

This website is the official public face of the DunesBit ecosystem. It must look trustworthy, polished, modern, and premium. It should not feel like a generic AI-generated SaaS template. The visual identity should feel clean, light, paper-like, elegant, technical, and slightly futuristic.

The website must be deployable to **Vercel**.

---

## 2. Brand Identity

### Brand Name

```txt
DunesBit
```

### Domain

```txt
dunesbit.com
```

### Brand Meaning

DunesBit represents the fusion of:

* **Dunes**: scale, landscape, ecosystem, foundation, creative world-building.
* **Bit**: software, code, digital systems, technical precision.

DunesBit is not only a Minecraft plugin brand. It is a parent software ecosystem for multiple future products.

---

## 3. Business Vision

DunesBit is being built as a multi-product software ecosystem.

The landing page must communicate that DunesBit is building:

1. **Premium Minecraft server plugins**
2. **AI-powered vibecoding/development platforms**
3. **MCP-based ChatGPT-connected development tools**
4. **Customer dashboards**
5. **Plugin licensing systems**
6. **Developer utilities**
7. **Future creator software products**
8. **Automation tools for builders, creators, and developers**

The site should position DunesBit as a serious software studio, not a hobby project.

---

## 4. Main Website Goal

The landing page should achieve these goals:

* Establish DunesBit as a premium software brand.
* Explain the ecosystem clearly.
* Show current and upcoming product categories.
* Build trust with users, server owners, developers, and creators.
* Create a strong foundation for future product pages.
* Allow easy expansion into plugin store, AI platform, docs, dashboard, and licensing.
* Look polished enough to be shown to customers.

---

## 5. Target Audience

The website is for:

### Minecraft Server Owners

People who need reliable, polished, configurable server plugins.

They care about:

* Stability
* Performance
* Configurability
* Support
* Anti-leak licensing
* Updates
* Good documentation
* Professional plugin quality

### Developers and Creators

People interested in AI-powered development tools and dashboards.

They care about:

* Fast workflows
* Clean UI
* Automation
* AI integration
* MCP tooling
* App generation
* Project management
* Deployment support

### Future Customers

People who may buy DunesBit products later.

They care about:

* Trust
* Clarity
* Pricing
* Documentation
* Support
* Product roadmap

---

## 6. Tech Stack

Use the following stack:

```txt
React
Node.js
Tailwind CSS
Vite or Next.js
Vercel deployment
```

Preferred implementation:

```txt
React + Vite + Tailwind CSS
```

Alternative allowed:

```txt
Next.js + Tailwind CSS
```

For a simple landing page, React + Vite is enough. Do not over-engineer the project with a backend unless needed.

---

## 7. Deployment Target

The site must be deployable on Vercel.

Requirements:

* Production build must work with `npm run build`.
* App must run locally with `npm run dev`.
* No hardcoded localhost URLs.
* No broken routes.
* No missing assets.
* No fake backend dependency.
* Must work on `dunesbit.com`.
* Must be responsive across desktop, tablet, and mobile.

---

## 8. Visual Direction

The design must be:

```txt
Premium
Light themed
Paper-style
Soft gradient
Modern
Clean
Minimal but not empty
High-end SaaS quality
```

Avoid:

```txt
Generic blue SaaS template
Dark cyberpunk overload
Random neon gradients
Unaligned cards
Cheap glassmorphism
Overused AI sparkle spam
Low-contrast gray text
Stock-looking hero sections
```

### Visual Feel

The website should feel like:

* premium paper texture
* soft warm background
* elegant shadows
* thin borders
* clean typography
* subtle gradient overlays
* polished dashboard previews
* calm, confident spacing

Think:

```txt
Notion-like clarity
Linear-like polish
Stripe-like layout discipline
Vercel-like developer trust
Apple-like white space
```

But do not copy any brand directly.

---

## 9. Color System

Use a light theme.

Recommended palette:

```txt
Background: #FAF7F1 / #FBFAF7 / #FFFFFF
Primary Text: #111111
Secondary Text: #5F6470
Muted Text: #8A8F98
Border: #E8E1D5
Card Background: rgba(255, 255, 255, 0.75)
Accent Orange: #F97316
Accent Amber: #F59E0B
Accent Sand: #E7CFA5
Accent Dark: #18181B
Soft Green: #22C55E for status indicators
```

Gradient ideas:

```css
background:
radial-gradient(circle at top left, rgba(249,115,22,0.12), transparent 35%),
radial-gradient(circle at top right, rgba(245,158,11,0.10), transparent 35%),
linear-gradient(180deg, #fffaf2 0%, #ffffff 45%, #f8f5ef 100%);
```

Use gradients subtly. Do not make the page look like a melted candy wrapper.

---

## 10. Typography

Use modern, clean typography.

Recommended fonts:

```txt
Inter
Geist
Satoshi
Manrope
Plus Jakarta Sans
```

Use one primary font only unless there is a strong reason.

Typography style:

* Large bold hero headline.
* Clean readable body text.
* Tight but not cramped letter spacing.
* Strong section titles.
* Small uppercase labels for product/category tags.

Suggested hero headline style:

```txt
font-size: clamp(3rem, 8vw, 6.5rem)
font-weight: 700 or 800
line-height: 0.95 - 1.05
letter-spacing: -0.05em
```

---

## 11. Page Structure

The landing page should include the following sections:

1. Navigation Bar
2. Hero Section
3. Ecosystem Overview
4. Product Pillars
5. Premium Plugin Section
6. AI Platform Section
7. Dashboard / Licensing Section
8. Why DunesBit Section
9. Roadmap / Coming Soon Section
10. Call To Action Section
11. Footer

---

# 12. Navigation Bar

The navbar must be clean, sticky or semi-sticky, and premium.

### Required Items

```txt
Logo: DunesBit
Links:
- Products
- Plugins
- AI Studio
- Docs
- Roadmap
- Contact
CTA Button:
- Join Waitlist / Coming Soon / Explore
```

### Navbar Style

* White or translucent paper background.
* Soft blur allowed.
* Thin border bottom.
* Rounded pill container optional.
* Must work on mobile with a hamburger menu or simplified layout.

Example nav structure:

```txt
DunesBit      Products  Plugins  AI Studio  Docs  Roadmap      Join Waitlist
```

---

# 13. Hero Section

The hero section is the most important part of the page.

It must communicate:

```txt
DunesBit builds premium plugins, AI-powered developer tools, and creator software.
```

### Hero Label

Example:

```txt
Premium software ecosystem for creators, developers, and Minecraft servers.
```

### Hero Headline Options

Use one of these or create a better one:

```txt
Build. Automate. Ship with DunesBit.
```

```txt
Premium tools for servers, creators, and developers.
```

```txt
A software ecosystem for plugins, AI tools, and creator platforms.
```

```txt
From Minecraft plugins to AI-powered development tools.
```

Best recommended headline:

```txt
Premium software for builders, servers, and creators.
```

### Hero Subheadline

Example:

```txt
DunesBit is building a connected ecosystem of Minecraft plugins, AI-powered development platforms, dashboards, licensing systems, and creator-focused tools designed to feel fast, reliable, and beautifully engineered.
```

### Hero Buttons

Primary CTA:

```txt
Explore DunesBit
```

Secondary CTA:

```txt
View Roadmap
```

or

```txt
Coming Soon
```

### Hero Visual

The hero should include a premium mock UI preview.

Possible hero visual:

* Floating dashboard card
* Plugin marketplace preview
* AI chat builder preview
* License status card
* Code generation panel
* Product ecosystem map

Recommended hero visual composition:

```txt
A large rounded dashboard panel showing:
- DunesBit Plugins
- AI Studio
- License Server
- Docs
- Project Status
- Coming Soon labels
```

This should be a designed UI mockup, not a screenshot.

---

# 14. Ecosystem Overview Section

This section explains that DunesBit is not one product. It is an ecosystem.

### Section Title

```txt
One ecosystem. Multiple products.
```

### Description

```txt
DunesBit connects premium Minecraft plugins, AI-powered coding workflows, customer dashboards, licensing infrastructure, and developer tools under one clean software ecosystem.
```

### Cards

Create 4 ecosystem cards:

#### Card 1: DunesBit Plugins

```txt
Premium Minecraft server plugins built for performance, configurability, and long-term maintainability.
```

#### Card 2: DunesBit AI Studio

```txt
A future AI-powered vibecoding platform where users can build software through connected AI workflows and MCP-powered tools.
```

#### Card 3: DunesBit Cloud

```txt
Dashboards, customer accounts, plugin downloads, license management, and product access in one place.
```

#### Card 4: DunesBit Developer Tools

```txt
Utilities, APIs, automation systems, and backend tooling for creators and developers.
```

Each card should have:

* Icon
* Title
* Description
* Small badge: `Planned`, `In Development`, or `Coming Soon`

---

# 15. Product Pillars Section

Create a section showing the three main pillars.

## Pillar 1: Plugins

Focus:

```txt
Minecraft PaperMC plugins, server ecosystems, minigames, lobby systems, friends, parties, queues, stats, dashboards, and license validation.
```

Features:

```txt
- PaperMC 1.21.x focused
- Configurable systems
- Performance-conscious architecture
- Plugin ecosystem approach
- Licensing-ready
- Documentation-first
```

## Pillar 2: AI Studio

Focus:

```txt
AI-powered web dashboard platform where users can build projects using ChatGPT-connected MCP workflows.
```

Features:

```txt
- MCP-based tool connection
- Project generation workflows
- Folder/source generation
- Task queues
- Progress tracking
- Premium dashboard experience
```

## Pillar 3: Cloud Dashboard

Focus:

```txt
Customer portal for licenses, downloads, documentation, updates, and product access.
```

Features:

```txt
- Account dashboard
- License key management
- Plugin downloads
- Product updates
- Documentation links
- Status indicators
```

---

# 16. Premium Plugin Section

This section should speak directly to Minecraft server owners.

### Title

```txt
Plugins built like products, not random JAR files.
```

### Description

```txt
DunesBit Plugins are planned as polished, configurable, performance-aware Minecraft server plugins designed for real networks, not throwaway test servers.
```

### Feature Grid

Include:

```txt
Performance-focused systems
Config-first behavior
MySQL-ready architecture
Cross-server support planning
Party and queue ecosystem support
Premium setup documentation
License verification
Customer dashboard integration
Long-term updates
```

### Important Tone

Do not claim products are already available unless they are. Use wording like:

```txt
planned
being built
designed for
in development
coming soon
```

Do not lie. Fake launch claims are how brands die before DNS propagation finishes.

---

# 17. AI Platform Section

This section explains the AI vibecoding platform vision.

### Title

```txt
AI-powered building, connected to real tools.
```

### Description

```txt
DunesBit AI Studio is envisioned as a premium web dashboard where users can connect their ChatGPT account through MCP workflows and generate project structures, source files, documentation, and development tasks through guided AI interactions.
```

### Core Concepts

Mention:

```txt
MCP integration
Agentic tool workflows
Source file generation
Folder structure generation
Task queues
Progress bars
Realtime status updates
Project dashboards
Readable generated documentation
Deployment-ready outputs
```

### UI Visual

Create a mock panel showing:

```txt
Chat request: “Build a plugin dashboard”
Task queue:
✓ Generate folder structure
✓ Create source files
✓ Write README
• Build UI components
• Prepare deployment
Progress: 68%
```

This makes the vision concrete.

---

# 18. Dashboard and Licensing Section

This section explains future account/product management.

### Title

```txt
A home for products, licenses, and updates.
```

### Description

```txt
DunesBit Cloud will act as the customer dashboard for managing plugin licenses, downloads, documentation, update channels, product access, and support links.
```

### Features

```txt
License key management
Plugin download access
Product status
Update history
Customer account area
Documentation shortcuts
Support/contact access
```

### Important Security Note

For landing page only, do not implement real authentication unless required.

If a dashboard preview exists, it must be static mock UI.

---

# 19. Why DunesBit Section

This should communicate serious engineering values.

### Title

```txt
Built with engineering discipline.
```

### Points

```txt
Product-first approach
Clean interfaces
Fast user experience
Reliable architecture
Documentation-driven development
Premium design standards
Scalable ecosystem thinking
```

### Expanded Copy

```txt
DunesBit is being built with a long-term ecosystem mindset: clean product boundaries, reliable customer flows, strong documentation, and software that feels intentional instead of stitched together.
```

---

# 20. Roadmap Section

The roadmap must show future plans without overpromising.

### Title

```txt
The DunesBit roadmap
```

### Roadmap Items

#### Phase 1: Foundation

```txt
Main website
Brand identity
Documentation base
Product roadmap
Domain and deployment setup
```

#### Phase 2: Plugin Ecosystem

```txt
DunesBit plugin catalog
Minecraft plugin product pages
License system planning
Customer dashboard design
```

#### Phase 3: AI Studio

```txt
AI vibecoding dashboard
MCP workflow integration
Task queue interface
Project generation flows
```

#### Phase 4: Cloud Platform

```txt
Accounts
Product access
Downloads
License management
Documentation hub
```

Use tags:

```txt
Now
Next
Planned
Future
```

---

# 21. Call To Action Section

The final CTA should be clean and confident.

### Title

```txt
DunesBit is just getting started.
```

### Text

```txt
A new software ecosystem for Minecraft servers, AI-powered development, dashboards, and creator tools is being built at dunesbit.com.
```

### Buttons

```txt
Join Waitlist
Explore Roadmap
Contact
```

If waitlist backend is not implemented, button can scroll to a static contact section.

---

# 22. Footer

Footer should include:

```txt
DunesBit
Premium software for builders, servers, and creators.
```

Links:

```txt
Products
Plugins
AI Studio
Docs
Roadmap
Contact
Status
```

Legal placeholders:

```txt
© 2026 DunesBit. All rights reserved.
```

Optional footer note:

```txt
Built for creators, developers, and Minecraft server owners.
```

---

# 23. Required Pages

For first version, only one main landing page is required.

Required route:

```txt
/
```

Optional future routes:

```txt
/products
/plugins
/ai-studio
/docs
/roadmap
/contact
```

For now, clicking nav links may scroll to sections on the same page.

---

# 24. Component Structure

Suggested React structure:

```txt
src/
  main.jsx
  App.jsx
  index.css
  components/
    Navbar.jsx
    Hero.jsx
    Ecosystem.jsx
    ProductPillars.jsx
    PluginSection.jsx
    AIStudioSection.jsx
    DashboardSection.jsx
    WhyDunesBit.jsx
    Roadmap.jsx
    CTA.jsx
    Footer.jsx
    SectionBadge.jsx
    ProductCard.jsx
    MockDashboard.jsx
```

Keep components clean and readable.

Do not dump the entire page into one cursed `App.jsx` landfill unless the project is intentionally tiny.

---

# 25. Tailwind Requirements

Use Tailwind CSS for all styling.

Required styling patterns:

```txt
Responsive layout
Consistent max-width container
Rounded cards
Soft borders
Subtle shadows
Light gradients
Clean hover states
Smooth transitions
Mobile-friendly spacing
```

Recommended container:

```txt
max-w-7xl mx-auto px-6 lg:px-8
```

Recommended card style:

```txt
rounded-3xl border border-stone-200/80 bg-white/70 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur
```

Recommended badge style:

```txt
inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700
```

---

# 26. Animation Direction

Animations should be subtle and premium.

Use CSS transitions or Framer Motion if desired.

Allowed animations:

```txt
Fade in on scroll
Soft floating hero cards
Hover lift on product cards
Subtle gradient movement
Smooth section reveal
Progress bar animation
```

Avoid:

```txt
Aggressive bouncing
Huge spinning objects
Random particle spam
Laggy scroll effects
Overanimated hero sections
```

Performance matters. Do not turn the landing page into a GPU stress test.

---

# 27. Responsive Design

The site must be responsive.

### Desktop

* Full hero layout with text and visual side by side.
* Large typography.
* Multi-column card grids.

### Tablet

* Reduced text scale.
* Two-column cards where appropriate.

### Mobile

* Single-column layout.
* Navbar simplified.
* Hero visual below text.
* Buttons stacked or full-width.
* No horizontal scrolling.
* Touch-friendly spacing.

---

# 28. Accessibility Requirements

The site should include:

```txt
Semantic HTML
Readable contrast
Alt text for images if any
Keyboard-friendly links and buttons
Visible focus states
Proper heading hierarchy
No text hidden inside images
```

Do not sacrifice accessibility for fake premium aesthetics.

---

# 29. Performance Requirements

The site must be fast.

Requirements:

```txt
No massive libraries unless needed
No unoptimized images
No blocking external scripts
No fake loading screens
No unnecessary backend calls
No layout shift
```

Target:

```txt
Lighthouse Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

---

# 30. SEO Requirements

Add metadata:

```txt
Title: DunesBit — Premium Software for Builders, Servers, and Creators
Description: DunesBit builds premium Minecraft plugins, AI-powered developer tools, dashboards, and creator software for modern builders.
URL: https://dunesbit.com
```

Open Graph:

```txt
og:title = DunesBit
og:description = Premium software for builders, servers, and creators.
og:type = website
og:url = https://dunesbit.com
```

Add a favicon placeholder or simple generated logo mark.

---

# 31. Content Tone

The writing style must be:

```txt
Confident
Premium
Technical but readable
Clear
Not childish
Not overhyped
Not fake enterprise
```

Avoid phrases like:

```txt
Revolutionary
Game-changing
AI-powered everything
Next-gen solution
Unlock your potential
Seamless experience
```

Use grounded language:

```txt
Built for real workflows.
Designed for long-term products.
Premium tools for creators and developers.
A connected software ecosystem.
```

---

# 32. Suggested Website Copy

## Hero

```txt
Premium software for builders, servers, and creators.
```

```txt
DunesBit is building a connected ecosystem of Minecraft plugins, AI-powered development tools, dashboards, licensing systems, and creator-focused software.
```

Buttons:

```txt
Explore the ecosystem
View roadmap
```

## Ecosystem

```txt
One brand. Multiple products.
```

```txt
From server plugins to AI-assisted development workflows, DunesBit is designed as a long-term software ecosystem with clean product boundaries and premium user experiences.
```

## Plugins

```txt
Plugins built like products.
```

```txt
DunesBit Plugins are planned for Minecraft server owners who need polished features, reliable architecture, clean configuration, and documentation that does not read like it was written during a server crash.
```

## AI Studio

```txt
Build with AI, backed by real workflows.
```

```txt
DunesBit AI Studio is envisioned as a premium dashboard for creating software through MCP-connected AI workflows, task queues, project generation, and guided development flows.
```

## Dashboard

```txt
Everything managed from one place.
```

```txt
DunesBit Cloud will bring licenses, downloads, product access, documentation, and updates into one clean customer dashboard.
```

## Roadmap

```txt
The ecosystem is starting now.
```

```txt
The first version of dunesbit.com should establish the brand, explain the vision, and prepare the foundation for products, dashboards, and documentation.
```

## Final CTA

```txt
DunesBit is just getting started.
```

```txt
A premium software ecosystem for plugins, AI tools, dashboards, and creators is being built from the ground up.
```

---

# 33. UI Mockup Requirements

The landing page should include at least one premium mock dashboard.

The mock dashboard should show fictional but realistic DunesBit products:

```txt
DunesBit Plugins
DunesBit AI Studio
DunesBit Cloud
License Server
Docs Hub
Status
```

Example mock dashboard content:

```txt
Product Status

DunesBit Plugins       In Development
AI Studio              Planned
License Server         Planned
Docs Hub               Active Soon

Current Build
Landing Page           82%
Plugin Catalog         34%
AI Studio UI           21%
```

Use progress bars, small status pills, and cards.

Do not claim live availability if not true.

---

# 34. Logo Direction

Create a simple text-based logo.

Logo idea:

```txt
DunesBit
```

Optional mark:

```txt
A minimal rounded square containing "DB"
A small sand-dune curve + pixel/bit dot
A clean abstract dune line
```

Logo must work in:

```txt
Header
Footer
Favicon
Social preview
```

Do not create an overly complex logo.

---

# 35. Contact / Waitlist

For version 1, implement a static contact section.

Possible CTA:

```txt
Interested in DunesBit products?
```

Fields if implementing form:

```txt
Name
Email
Interest: Plugins / AI Studio / Dashboard / Other
Message
```

Do not wire backend unless explicitly configured.

If no backend exists, use a visible placeholder:

```txt
Contact system coming soon.
```

Optional simple mail link:

```txt
mailto:contact@dunesbit.com
```

Only use this if the email account exists or is planned.

---

# 36. What Not To Build

Do not build:

```txt
Real authentication
Real payment system
Real license verification
Fake working dashboard
Fake customer login
Fake plugin downloads
Fake product claims
Backend APIs
Database integration
Stripe integration
Firebase integration
Supabase integration
```

This is the main landing page only.

Static premium page first. Backend later. Do not build a distributed system just to render a homepage. That is how people accidentally create Kubernetes to show a heading.

---

# 37. Engineering Quality Bar

The final project must:

```txt
Run without errors
Build without errors
Have clean component organization
Use Tailwind properly
Be responsive
Have polished spacing
Have no placeholder lorem ipsum
Have no broken buttons
Have no console errors
Have no unused massive dependencies
Have correct metadata
Be ready for Vercel deployment
```

No half-built files. No empty components. No TODO spam. No “coming soon” everywhere except where appropriate.

---

# 38. Suggested Commands

If using Vite:

```bash
npm create vite@latest dunesbit-landing -- --template react
cd dunesbit-landing
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

Build:

```bash
npm run build
```

Deploy:

```bash
vercel
```

or connect GitHub repo to Vercel.

---

# 39. Success Criteria

The final website is successful if:

```txt
It instantly communicates what DunesBit is.
It looks like a real premium software brand.
It works perfectly on mobile and desktop.
It can be deployed to Vercel.
It gives room for future products.
It does not overpromise.
It feels trustworthy enough for customers.
It makes dunesbit.com feel like a serious .com brand.
```

---

# 40. Final Build Instruction For AI Agent

Build the DunesBit landing page as a premium, light-themed, paper-gradient React + Tailwind website deployable on Vercel.

Use clean component architecture, polished responsive design, strong typography, subtle animations, premium card layouts, and realistic mock UI panels.

The page must represent DunesBit as a serious software ecosystem for Minecraft plugins, AI-powered development tools, dashboards, licensing systems, and creator software.

Do not create fake working backend systems. Do not over-engineer. Build the public-facing homepage first with excellent UI quality and clean production-ready code.
