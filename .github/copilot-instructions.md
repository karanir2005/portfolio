# Copilot Instructions for Personal Portfolio

## Project Overview

This is a Next.js portfolio website showcasing skills, projects, and experiences as a software engineering student. The site features a modern, responsive design with light/dark theme support, hosted on Vercel.

## Build, Test, and Lint

### Development Server
```bash
npm run dev
```
Starts the Next.js dev server with Turbopack on `http://localhost:3000`.

### Production Build
```bash
npm build
```
Builds the project with Turbopack for production deployment.

### Start Production Server
```bash
npm start
```
Runs the production build locally.

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality. ESLint is configured with Next.js core-web-vitals and TypeScript support.

## Architecture

### Directory Structure
- **`src/app/`**: Next.js App Router pages (homepage, `/projects`, `/resume`)
- **`src/components/`**: Reusable React components (Hero, Skills, Projects, Contact, etc.)
- **`src/context/`**: React Context providers (ThemeProvider for light/dark mode)
- **`src/data/`**: Static data (projects.ts contains portfolio project data)
- **`src/types/`**: TypeScript type definitions (e.g., Project interface)
- **`src/styles/`**: Global CSS and TailwindCSS configuration

### Key Patterns

#### Theme Management
The site uses React Context (ThemeProvider) for global theme state:
- Stored in localStorage as "theme" (values: "light" or "dark")
- Applies theme class to `<html>` element for Tailwind dark mode styling
- Default theme is "dark"
- Use `useTheme()` hook to access theme state and `toggleTheme()` function

#### Data Structure
Portfolio data (projects, skills, experience) is typically defined in `src/data/` files as static objects/arrays. Import and use these in components to keep data separate from UI logic.

#### Component Organization
- Page components are in `src/app/` (Next.js App Router)
- Reusable UI components are in `src/components/`
- Each component manages its own state and styling (TailwindCSS classes)

### Tech Stack
- **Framework**: Next.js 15.5.7 with React 19
- **Styling**: TailwindCSS 4.1.12 with PostCSS
- **Icons**: lucide-react, react-icons
- **Animations**: Framer Motion
- **Type Checking**: TypeScript with strict mode
- **Linting**: ESLint with Next.js and TypeScript rules
- **Path Aliases**: `@/*` maps to `src/*` (configured in tsconfig.json)

## Key Conventions

### TypeScript & Strict Mode
- TypeScript strict mode is enabled (`"strict": true`)
- All components should be properly typed with React.ReactNode, interfaces, etc.
- Use `@/*` path aliases instead of relative imports (e.g., `import Hero from "@/components/Hero"`)

### Styling
- Use TailwindCSS utility classes for all styling
- Dark mode support: Use `dark:` prefix for dark theme styles
- Responsive design: Use Tailwind breakpoints (sm:, md:, lg:, etc.)
- Global styles are in `src/styles/globals.css`

### Client vs Server Components
- Use `"use client"` directive for components that need interactivity (hooks, context, event handlers)
- Page components in `src/app/` are server components by default unless they need client-side features
- ThemeProvider wraps the entire app and is a client component

### Code Quality
- ESLint extends Next.js core-web-vitals and TypeScript best practices
- All files should pass linting before deployment
- Ignored directories: node_modules, .next, out, build

## Common Tasks

### Adding a New Project
1. Add project data to `src/data/projects.ts` following the existing object structure
2. Import the data in component and render using `ProjectCard` component
3. Test both light and dark themes

### Creating a New Page
1. Add a new route file in `src/app/` (e.g., `about/page.tsx`)
2. Import necessary components from `src/components/`
3. Wrap interactive elements with `"use client"` if needed
4. Ensure responsive design works on mobile

### Theme-Aware Styling
1. Use Tailwind's `dark:` prefix for dark mode styles
2. Access theme context in components via `useTheme()` hook if needed
3. Test both light and dark theme visually after changes
