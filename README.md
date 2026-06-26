# LS Lee Technology Website

A responsive company website for **LS Lee Technology Pte. Ltd.**, built with React and Vite. The site presents the company’s engineering services, served industries, project portfolio, certifications, and contact form in a modern industrial visual style.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Main Features](#main-features)
- [Project Structure](#project-structure)
- [How Routing Works](#how-routing-works)
- [Page-by-Page Breakdown](#page-by-page-breakdown)
- [External Integrations](#external-integrations)
- [How to Run Locally](#how-to-run-locally)
- [How to Build](#how-to-build)
- [Deployment](#deployment)
- [Important Security Note](#important-security-note)
- [Known Notes and Improvements](#known-notes-and-improvements)

---

## Overview

This repository contains a single-page React application for LS Lee Technology. It uses client-side routing to show different pages without a traditional backend.

The website communicates the company’s positioning as a mechanical engineering contractor serving gas, process, semiconductor, data centre, industrial gas, and new energy sectors.

The main user flow is:

1. Visitor lands on the Home page.
2. Visitor explores industries, services, projects, or certifications.
3. Visitor submits an enquiry through the Contact page.

---

## Tech Stack

| Area | Tool / Library | Purpose |
|---|---|---|
| Frontend | React 18 | Builds the user interface using components |
| Build Tool | Vite | Fast local development and production builds |
| Routing | React Router DOM | Handles page navigation inside the React app |
| Animation | Framer Motion | Adds page and section animations |
| Icons | Inline SVG + lucide-react dependency | Provides visual icons across pages |
| Styling | CSS + inline styles | Uses global CSS variables and component-level inline styling |
| CMS/Data Source | Notion API | Loads projects and certifications dynamically |
| Contact Form | Formspree | Sends enquiry form submissions without a custom backend |
| Deployment | GitHub Actions + GitHub Pages | Builds and publishes the static site automatically |

---

## Main Features

- Responsive desktop and mobile layout
- Sticky top navigation bar
- Mobile hamburger menu
- Industries dropdown on desktop
- Footer with quick links
- Animated page sections using Framer Motion
- Notion-powered Projects page
- Notion-powered Certifications page
- Project filtering by industry and service category
- Project detail modal with image carousel support
- Certification carousel with modal preview
- Contact form with basic phone validation
- Embedded Google Maps location
- GitHub Pages deployment workflow

---

## Project Structure

```txt
LS-LEE-TECH-1-main/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── HeroImage.png
│   ├── logo.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── clients/
│       └── client logo images
├── src/
│   ├── assets/
│   │   └── Logo.png
│   ├── hooks/
│   │   └── useMobile.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Industries.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## How Routing Works

The app uses `HashRouter` from `react-router-dom` in `src/main.jsx`.

```jsx
<HashRouter>
  <App />
</HashRouter>
```

This means URLs use hash-based routing, for example:

```txt
/#/Home
/#/About
/#/Industries
/#/Services
/#/Projects
/#/Certifications
/#/Contact
```

Hash routing is useful for GitHub Pages because GitHub Pages does not automatically support server-side fallback routing for React apps.

The actual route definitions are in `src/App.jsx`:

```jsx
<Route path="/Home" element={<Wrap name="Home" Page={Home} />} />
<Route path="/About" element={<Wrap name="About" Page={About} />} />
<Route path="/Industries" element={<Wrap name="Industries" Page={Industries} />} />
<Route path="/Services" element={<Wrap name="Services" Page={Services} />} />
<Route path="/Projects" element={<Wrap name="Projects" Page={Projects} />} />
<Route path="/Certifications" element={<Wrap name="Certifications" Page={Certifications} />} />
<Route path="/Contact" element={<Wrap name="Contact" Page={Contact} />} />
```

The root route redirects to `/Home`, and unknown routes also redirect back to `/Home`.

---

## Page-by-Page Breakdown

### `src/main.jsx`

This is the React entry point. It mounts the app into the `#root` element from `index.html`, imports global CSS, and wraps the application in `HashRouter`.

---

### `src/App.jsx`

This file defines all application routes. It also uses a small `Wrap` helper component to place every page inside the shared `Layout` component.

This keeps the navigation bar and footer consistent across all pages.

---

### `src/Layout.jsx`

This is the shared layout used by every page.

It contains:

- Sticky navigation bar
- LS Lee logo
- Desktop navigation links
- Industries dropdown menu
- Mobile hamburger menu
- Footer with company, industry, service, and contact links

The layout receives `currentPageName` so it can highlight the active navigation item.

It also uses the custom `useMobile()` hook to switch between desktop and mobile layouts.

---

### `src/hooks/useMobile.js`

This custom hook checks whether the viewport width is below `768px`.

It returns:

```js
true  // mobile layout
false // desktop layout
```

The hook listens for window resize events and updates the layout automatically.

---

### `src/pages/Home.jsx`

The Home page is the main landing page.

It contains:

- Hero section with headline and call-to-action buttons
- Certifications preview carousel
- Industries preview section
- Services preview section
- Featured projects preview
- Final contact call-to-action

The page uses inline SVG icons and Framer Motion animations to create a more polished industrial look.

---

### `src/pages/About.jsx`

The About page explains the company background.

It contains:

- About hero section
- Vision, mission, and core values cards
- Company story section
- Timeline of milestones
- Client logo carousel
- Contact call-to-action

The client logos are loaded from:

```txt
public/clients/
```

---

### `src/pages/Industries.jsx`

The Industries page explains the sectors served by the company.

The four main industry sections are:

1. Semiconductor
2. Data Centres
3. Industrial Gas
4. New Energy

Each industry has:

- Icon
- Title
- Tagline
- Description
- Capability list
- Link to related projects

The page also supports hash navigation, for example:

```txt
/#/Industries#semiconductor
/#/Industries#datacenter
/#/Industries#industrial-gas
/#/Industries#new-energy
```

---

### `src/pages/Services.jsx`

The Services page presents the company’s service categories.

The five service sections are:

1. Project Engineering
2. Plant Maintenance
3. Servicing & Testing
4. Cryogenic Storage & Hoses
5. Electrical & Instrumentation

The page uses a tab-style interface. On desktop, the service list appears as a vertical sidebar. On mobile, it becomes a horizontal scrollable tab bar.

The page supports deep linking through query parameters and hash links:

```txt
/#/Services?service=project-engineering
/#/Services?service=plant-maintenance
/#/Services?service=servicing-testing
/#/Services?service=cryogenic-storage
/#/Services?service=electrical-instrumentation
```

When a service is selected, the page displays its description and key capabilities.

---

### `src/pages/Projects.jsx`

The Projects page loads project data from a Notion database.

It supports:

- Fetching project entries from Notion
- Filtering by industry or service category
- Displaying projects in a grid
- Opening a project modal
- Showing project images
- Falling back to placeholder images when a project image is missing

Expected Notion project properties:

| Property | Type | Purpose |
|---|---|---|
| `Published` | Checkbox | Only checked projects are displayed |
| `Title` | Title | Project name |
| `Category` | Multi-select | Industry/service filters |
| `Year` | Number | Project year |
| `Image` | URL | Main image |
| `Images` | Rich text | Comma-separated image URLs for carousel |
| `Description` | Rich text | Project description |

Projects are sorted by `Year` in descending order.

---

### `src/pages/Certifications.jsx`

The Certifications page loads certification data from a separate Notion database.

It supports:

- Fetching certification entries from Notion
- Filtering to only published certifications
- Displaying certifications in a carousel
- Opening a modal to view certificate details
- Showing certificate image previews
- Opening the full certificate image in a new tab

Expected Notion certification properties:

| Property | Type | Purpose |
|---|---|---|
| `Published` | Checkbox | Only checked certifications are displayed |
| `Name` | Title | Certification name |
| `Body` | Rich text | Certification description |
| `IssuedBy` | Rich text | Issuing organisation |
| `Scope` | Rich text | Certification scope |
| `CertNumber` | Rich text | Certificate number |
| `ValidFrom` | Date | Start date |
| `ValidTo` | Date | Expiry date |
| `Certificate` | URL | Certificate image/file URL |

---

### `src/pages/Contact.jsx`

The Contact page contains company contact details and an enquiry form.

It includes:

- Contact information section
- Embedded Google Maps iframe
- Formspree-powered contact form
- Name, company, email, phone, and message fields
- Required validation for name, email, and message
- Singapore-style 8-digit phone number validation
- Success and error states after submission

The current Formspree endpoint is stored directly inside `Contact.jsx`.

---

### `src/index.css`

This file contains global CSS and design variables.

It imports Google Fonts:

- IBM Plex Sans
- IBM Plex Mono
- Archivo

It also defines reusable colours such as:

```css
--navy: #0A1628;
--orange: #DC2626;
--teal: #00BCD4;
--paper: #FFFFFF;
--muted: #5B6573;
```

Many pages use inline styles, but this global CSS controls base typography, layout helpers, buttons, hero styling, and shared utility classes.

---

## External Integrations

### Notion API

The Projects and Certifications pages both fetch content from Notion databases.

The fetch flow is:

1. Frontend sends a POST request to the Notion database query endpoint.
2. Request goes through a CORS proxy.
3. Notion returns database entries.
4. The app filters entries where `Published` is checked.
5. The app maps Notion properties into project or certification cards.

### Formspree

The Contact page submits the enquiry form to Formspree.

This allows the static site to receive form submissions without a custom backend.

### Google Maps

The Contact page embeds a Google Maps iframe using the company address.

---

## How to Run Locally

Make sure Node.js is installed. Node 18 is used in the GitHub Actions deployment workflow.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will show a local development URL, usually:

```txt
http://localhost:5173/
```

Open the URL in your browser.

---

## How to Build

Create a production build:

```bash
npm run build
```

The production files will be generated in:

```txt
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

This project is configured for GitHub Pages.

The Vite base path is set in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/LS-LEE-TECH-1/'
})
```

This means the deployed site expects to be hosted under:

```txt
https://<github-username>.github.io/LS-LEE-TECH-1/
```

The deployment workflow is located at:

```txt
.github/workflows/deploy.yml
```

On every push to the `main` branch, GitHub Actions will:

1. Check out the repository
2. Set up Node 18
3. Install dependencies
4. Build the Vite app
5. Publish the `dist/` folder to GitHub Pages using `peaceiris/actions-gh-pages`

---

## Important Security Note

The current project has a Notion integration token directly inside the frontend source code.

This is not safe for production.

Anything placed inside React/Vite frontend code becomes visible to users after the site is built and deployed. Even moving the key into a Vite environment variable would not fully secure it, because frontend environment variables are still bundled into client-side code when used in the browser.

Recommended fix:

1. Rotate or revoke the exposed Notion token.
2. Create a small backend or serverless function to call Notion securely.
3. Store the Notion token only on the server side.
4. Let the frontend call your own backend endpoint instead of calling Notion directly.

The current CORS proxy approach works as a quick prototype, but it should not be treated as a secure production setup for private Notion data.

---

## Known Notes and Improvements

### 1. Hard-coded external configuration

The Notion database IDs, Notion token, CORS proxy URL, and Formspree endpoint are currently hard-coded inside page files.

A cleaner structure would place non-secret public config into a separate config file, and secret credentials into a backend environment.

### 2. Mixed navigation methods

Most navigation uses React Router’s `Link`, but some buttons use regular `<a href="/Projects">` or `<a href="/Services">` links.

Because the app uses `HashRouter`, regular absolute links may not always behave as expected on GitHub Pages. Prefer using `Link` from `react-router-dom` for internal navigation.

### 3. Heavy inline styling

Most components use inline styles. This works, but the project may become easier to maintain if repeated styles are moved into CSS classes or reusable components.

### 4. Repeated icon code

Several pages define their own inline SVG icons. This keeps the site self-contained, but reusable icon components could reduce file length and duplication.

### 5. Notion API error handling

The Projects and Certifications pages show simple loading and error states. This can be improved with retry buttons, clearer fallback content, or static backup content.

### 6. Image handling

Project images depend on external URLs or placeholders. For a more controlled production site, important project images should be optimised and stored in the project or a reliable image host.

---

## Available NPM Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the production version of the app |
| `npm run preview` | Previews the production build locally |

---

## Summary

This repository is a static React/Vite website for LS Lee Technology. It combines a polished company website structure with dynamic content from Notion for projects and certifications. The app is already configured for GitHub Pages deployment, but the Notion token should be removed from the frontend before treating the site as production-ready.
