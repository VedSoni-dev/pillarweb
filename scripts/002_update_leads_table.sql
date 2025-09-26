-- Update the leads table to match the simplified form
-- Drop existing table and recreate with new structure
DROP TABLE IF EXISTS leads;

CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  website VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts for all users (since this is a lead form)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users only (for admin access)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT 
  TO authenticated 
  USING (true);
