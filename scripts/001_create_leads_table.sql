-- Create leads table for storing onboarding form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  website_or_linkedin TEXT,
  looking_for TEXT NOT NULL,
  problem_explanation TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a lead form)
-- But only allow reading for authenticated users (if we add auth later)
CREATE POLICY "leads_insert_public" 
  ON public.leads FOR INSERT 
  WITH CHECK (true);

-- For now, allow public read access for admin purposes
-- You can restrict this later when you add authentication
CREATE POLICY "leads_select_public" 
  ON public.leads FOR SELECT 
  USING (true);
