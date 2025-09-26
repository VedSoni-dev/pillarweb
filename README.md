# Pillar AI - Real Estate Automation Platform

A modern Next.js application for real estate automation with AI-powered features.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account (for database)

### Installation

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
pillarwebsite/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── components/        # App-specific components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Navigation component
│   ├── get-started-modal.tsx # Lead capture modal
│   └── pillar-landing.tsx # Landing page component
├── lib/                   # Utility libraries
│   ├── supabase/          # Supabase client configs
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── scripts/               # Database scripts
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Database:** Supabase
- **Language:** TypeScript
- **Fonts:** Geist Sans & Mono
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## 🎨 Design System

The project uses a custom design system with:
- **Primary Colors:** Gold gradient (#D4AF37 to #F7DC6F)
- **Typography:** Geist fonts with thin/light weights
- **Components:** shadcn/ui components with custom styling
- **Animations:** Tailwind CSS animations + custom effects

## 📱 Features

- **Responsive Design:** Mobile-first approach
- **Interactive Elements:** Mouse-following animations
- **Lead Capture:** Modal with Supabase integration
- **Modern UI:** Glassmorphism and gradient effects
- **SEO Optimized:** Proper meta tags and structure

## 🗄️ Database Setup

1. **Create a Supabase project**
2. **Run the SQL scripts in `/scripts`:**
   ```sql
   -- Create leads table
   CREATE TABLE leads (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT NOT NULL,
     website TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Other Platforms
```bash
pnpm build
pnpm start
```

## 🧪 Development

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Style
- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Implement responsive design patterns

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.ts`.

### Supabase
Configure your Supabase client in `lib/supabase/client.ts` and `lib/supabase/server.ts`.

## 📝 Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Need help?** Contact the development team or check the documentation.