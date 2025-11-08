# Next.js: React for Production

**Next.js is the most popular React framework for building production-ready web applications.**

If React is the engine, Next.js is the complete car - ready to drive out of the dealership.

## 🤔 Why Learn Next.js?

### Companies Using Next.js
- Netflix
- TikTok
- Twitch
- Notion
- Hulu
- Nike
- Ticketmaster
- DoorDash

### Why Companies Choose Next.js

**1. Better Performance**
- Server-side rendering (SSR)
- Static site generation (SSG)
- Automatic code splitting
- Image optimization
- Built-in performance best practices

**2. Better SEO**
- Server-rendered content for search engines
- Metadata management
- Open Graph support

**3. Better Developer Experience**
- File-based routing (no react-router setup)
- API routes (backend in the same project)
- TypeScript support out of the box
- Hot reload that actually works
- Zero config needed

**4. Better User Experience**
- Faster page loads
- Instant page transitions
- Prefetching
- Optimized images
- Better Core Web Vitals

## 🎯 What You'll Learn

### Week 1: Next.js Fundamentals

**Day 1-2: Setup & Routing**
- Installing Next.js
- Project structure
- File-based routing
- Dynamic routes
- Route groups
- Layouts

**Day 3-4: Data Fetching**
- Server Components
- Client Components
- fetch() in Server Components
- Loading states
- Error handling
- Streaming

**Day 5-7: Core Features**
- Link component
- Image component
- Metadata & SEO
- Fonts optimization
- Static assets

### Week 2: Advanced Features

**Day 8-10: Backend & APIs**
- API Routes
- Server Actions
- Route Handlers
- Middleware
- Database integration

**Day 11-14: Production Features**
- Authentication (NextAuth.js)
- Forms & validation
- Caching strategies
- Deployment to Vercel
- Environment variables
- Error handling

## 📚 Prerequisites

Before starting Next.js, you should know:
- ✅ JavaScript fundamentals
- ✅ React basics (components, props, state, hooks)
- ✅ TypeScript (recommended but not required)
- ✅ Basic API concepts

**Not there yet?**
- Complete [JavaScript section](/javascript/intro) first
- Then [React section](/react-fundamentals/intro)
- Then come back here

## 🏗️ Next.js 14 App Router

We'll focus on the **App Router** (Next.js 13+), not the Pages Router.

### App Router vs Pages Router

**App Router** (Modern - Learn This!)
```
app/
  layout.tsx      ← Root layout
  page.tsx        ← Home page
  about/
    page.tsx      ← /about
  blog/
    [slug]/
      page.tsx    ← /blog/[slug]
```

**Pages Router** (Legacy - Ignore for now)
```
pages/
  _app.tsx
  index.tsx       ← Home page
  about.tsx       ← /about
```

## 🚀 Key Concepts

### 1. Server Components (Default)

```tsx
// app/page.tsx - Server Component by default
async function HomePage() {
  // Fetch data on the server
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()

  return <div>{json.title}</div>
}

export default HomePage
```

**Benefits:**
- No JavaScript sent to client
- Direct database access
- Secure API keys
- Better performance

### 2. Client Components (When Needed)

```tsx
'use client' // This makes it a Client Component

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

**Use Client Components for:**
- Event handlers (onClick, onChange)
- Hooks (useState, useEffect)
- Browser APIs (localStorage, window)
- Interactive components

### 3. File-based Routing

No need for react-router! Files = Routes.

```
app/
  page.tsx              → /
  about/page.tsx        → /about
  blog/page.tsx         → /blog
  blog/[slug]/page.tsx  → /blog/:slug
```

### 4. Layouts

Share UI across multiple pages:

```tsx
// app/layout.tsx - Root layout for all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>My Website</nav>
        {children}
        <footer>© 2025</footer>
      </body>
    </html>
  )
}
```

### 5. API Routes

Backend endpoints in your frontend project:

```tsx
// app/api/users/route.ts
export async function GET() {
  const users = await db.user.findMany()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const user = await db.user.create({ data: body })
  return Response.json(user)
}
```

## 🛠️ Getting Started

### Installation

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

**Choose these options:**
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ App Router: Yes
- ✅ Import alias: No (or default)

### Project Structure

```
my-app/
├── app/                    ← Your app code
│   ├── layout.tsx         ← Root layout
│   ├── page.tsx           ← Home page
│   └── api/               ← API routes
├── public/                ← Static files
├── next.config.js         ← Next.js config
├── package.json
└── tsconfig.json
```

## 📖 Learning Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs) - Best resource, start here
- [Next.js Learn Course](https://nextjs.org/learn) - Interactive tutorial

### Video Courses
- [Next.js 14 Tutorial](https://www.youtube.com/c/leerob) by Lee Robinson (Vercel)
- [Next.js Full Course](https://www.youtube.com/c/TraversyMedia) by Traversy Media
- [Theo - t3.gg](https://www.youtube.com/@t3dotgg) - Advanced Next.js patterns

### Practice Projects
Start building these in order:

**1. Blog with Markdown Posts**
- File-based routing
- Static generation
- Metadata

**2. Dashboard with API**
- Server Components
- Data fetching
- Loading states

**3. Full-Stack App**
- Authentication
- Database
- Forms
- Deployment

## 🎯 Next.js vs Plain React

| Feature | React | Next.js |
|---------|-------|---------|
| **Routing** | Install react-router | Built-in (file-based) |
| **SEO** | Poor (client-side only) | Excellent (server-rendered) |
| **Performance** | Good | Better (SSR, SSG, ISR) |
| **Backend** | Need separate API | API routes included |
| **Images** | Manual optimization | Automatic (next/image) |
| **Setup** | Need to configure | Zero config |
| **Deployment** | Manual setup | One-click (Vercel) |
| **Code Splitting** | Manual | Automatic |

## ⚡ Common Next.js Patterns

### Pattern 1: Fetch Data in Server Component

```tsx
// app/posts/page.tsx
async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

### Pattern 2: Loading UI

```tsx
// app/posts/loading.tsx - Shown while page loads
export default function Loading() {
  return <div>Loading posts...</div>
}
```

### Pattern 3: Error Handling

```tsx
// app/posts/error.tsx - Shown on error
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

### Pattern 4: Dynamic Routes

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  return <h1>Post: {params.slug}</h1>
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (literally one click)

**Your app is live!** 🎉

Vercel is made by the creators of Next.js, so it's optimized for Next.js apps.

## 🎓 Learning Path

### Week 1: Basics
- [ ] Complete [Next.js Learn tutorial](https://nextjs.org/learn)
- [ ] Build a simple blog with static pages
- [ ] Understand Server vs Client Components
- [ ] Learn file-based routing

### Week 2: Intermediate
- [ ] Add API routes
- [ ] Implement data fetching
- [ ] Add loading and error states
- [ ] Build a dashboard with real API data

### Week 3: Advanced
- [ ] Add authentication (NextAuth.js)
- [ ] Connect to database (Prisma)
- [ ] Implement forms with Server Actions
- [ ] Deploy to production

### Week 4: Portfolio Project
- [ ] Build a full-stack application
- [ ] User authentication
- [ ] CRUD operations
- [ ] Production deployment
- [ ] Add to portfolio

## 💼 Interview Questions

Be ready to answer these:

1. **What is Next.js and why use it?**
   - React framework for production
   - SSR, SSG, better SEO, routing, optimization

2. **Server Components vs Client Components?**
   - Server: Default, no JS to client, can access backend
   - Client: For interactivity, hooks, event handlers

3. **How does routing work in Next.js?**
   - File-based routing in app directory
   - Folders = routes, page.tsx = page content

4. **What are Server Actions?**
   - Functions that run on server
   - Handle form submissions
   - No API route needed

5. **How do you fetch data in Next.js?**
   - Server Components: async/await in component
   - Client Components: useEffect or SWR/React Query

## 🏁 Ready to Start?

**Learn Next.js:** Start with the [official tutorial](https://nextjs.org/learn)

**Build Projects:** Check out [project ideas](/projects/intro)

**Back to Overview:** [Complete Learning Path](/learning-path/intro)

---

**Next.js is your superpower for building fast, SEO-friendly, full-stack React applications. Master it, and you'll be incredibly valuable to employers.** 🚀
