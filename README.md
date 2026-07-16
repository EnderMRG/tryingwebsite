# Metapparels

Metapparels is a modern fashion-themed storefront built with Next.js, React, TypeScript, and Tailwind CSS. The project presents a polished e-commerce landing experience with animated UI sections, category-based browsing, and a simple shopping flow for men, women, and kids apparel.

## Overview

This application is designed to feel like a premium fashion brand website. It includes:

- A visually rich landing page with a hero section and immersive visuals
- Category navigation for men, women, and kids clothing
- Dedicated pages for product collections such as shirts, trousers, t-shirts, tuxedos, and dresses
- A cart experience and a thank-you completion page
- Reusable animated UI components for a modern, interactive feel

## Features

- Responsive layout for desktop and mobile screens
- Smooth animated interfaces using Framer Motion
- Custom navigation menu with category-based product links
- Product section pages for different fashion categories
- Contact and feedback sections on the main experience
- Lightweight utility helpers and custom UI primitives

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- clsx / tailwind-merge

## Project Structure

```text
src/
  app/
    cart/              # cart page
    men/               # men category pages
    women/             # women category pages
    products/          # product listing page
    thank/             # thank-you page
    page.tsx           # home page
  components/
    ui/                # reusable UI components
    HeroSection.tsx
    Navbar.tsx
    Footer.tsx
    feedback.tsx
    FeaturedProducts.tsx
    Creator.tsx
  lib/
    utils.ts
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev      # starts the local development server
npm run build    # creates a production build
npm run start    # starts the production server
npm run lint     # runs the linter
```

## Main Pages

- Home: displays the landing experience and featured sections
- Men: clothing categories such as shirts, t-shirts, trousers, and tuxedos
- Women: clothing categories such as shirts, dresses, trousers, and co-ords
- Kids: children’s clothing sections
- Cart: shopping cart view
- Thank You: post-purchase completion page

## UI and Styling

The styling is handled with Tailwind CSS and custom utility classes. The interface uses a dark theme with animated gradients, spotlight effects, and motion-driven card transitions.

## Customization

You can customize the look and feel by editing:

- [src/app/page.tsx](src/app/page.tsx) for the homepage sections
- [src/components/Navbar.tsx](src/components/Navbar.tsx) for navigation links and category menus
- [src/components/HeroSection.tsx](src/components/HeroSection.tsx) for the hero content
- [src/app/globals.css](src/app/globals.css) for global styling

## Deployment

This project is ready to be deployed on platforms such as Vercel, Netlify, or any Node.js-compatible hosting service.

For Vercel, the simplest approach is:

1. Connect your GitHub repository
2. Import the project in Vercel
3. Deploy with the default Next.js settings

## License

This project is for educational and portfolio purposes unless a different license is added later.
