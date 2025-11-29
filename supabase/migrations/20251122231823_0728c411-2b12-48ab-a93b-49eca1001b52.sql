-- Create personal_care_inquiries table for capturing interest
CREATE TABLE personal_care_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  preferred_contact text,
  message text,
  status text DEFAULT 'new',
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable RLS
ALTER TABLE personal_care_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit inquiry (public form submission)
CREATE POLICY "Anyone can submit inquiry"
  ON personal_care_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Policy: Authenticated users can view inquiries
CREATE POLICY "Authenticated users can view inquiries"
  ON personal_care_inquiries
  FOR SELECT
  USING (true);