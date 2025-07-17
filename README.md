# Tracktiv8

**Career Track and Course System**  
[Live Site](https://tracktiv8.vercel.app)

## Overview

Tracktiv8 is a platform designed to help users identify and bridge their skill gaps by recommending relevant career tracks and courses, especially leveraging Hacktiv8's educational offerings. The system integrates with Firebase for authentication and data storage, and provides personalized recommendations based on user input.

## Features

-   **Career Track Recommendation:**  
    Users can take a quiz to receive recommended career tracks (e.g., Fullstack JavaScript, Backend GoLang, Frontend React, Data Science, Data Analytics, Digital Marketing).

-   **Course Suggestions:**  
    The system provides direct course links from Hacktiv8 based on the user's selected or recommended career path.

-   **Authentication:**  
    Sign-up and sign-in using Firebase Authentication.

-   **Modern UI:**  
    Uses Next.js (App Router), TailwindCSS, and several custom UI components for a modern, responsive experience.

-   **AI Chat Widget:**  
    Integrated GraniteChatWidget for user support and additional AI-powered assistance.

## Why Choose Tracktiv8?

> _"Platform kami menyediakan semua yang kamu butuhkan untuk mengidentifikasi dan menjembatani kesenjangan keterampilan secara efektif."_  
> ("Our platform provides everything you need to identify and bridge skill gaps effectively.")

## Getting Started

### Prerequisites

-   Node.js (v18 or above recommended)
-   npm or pnpm

### Environment Variables

Create a `.env.local` file in the root directory with the following keys (you can get these from your Firebase project and Replicate account):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
REPLICATE_API_TOKEN=your_replicate_api_token
```

### Installation

```bash
# Install dependencies
npm install

# or
pnpm install
```

### Running Locally

```bash
npm run dev

# or
pnpm dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

-   `app/` - Next.js app router pages and API routes
-   `components/` - Reusable UI and feature components (Navbar, Chat Widget, Forms, etc.)
-   `lib/` - Utility libraries (e.g., Firebase config)
-   `public/` - Static assets
-   `tailwind.config.ts` & `postcss.config.mjs` - Styling configs

## Tech Stack

-   **Next.js** (App Router, TypeScript)
-   **TailwindCSS**
-   **Firebase** (Auth, Firestore)
-   **Replicate API** (for AI features)
-   **Radix UI** (UI primitives)

© 2025 Tracktiv8 by [manry-hub](https://github.com/manry-hub)
