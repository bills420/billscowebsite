/*
  # Service Requests Migration Fix

  This migration creates the service_requests table and its policies,
  with checks to prevent duplicate policy errors.
*/

-- Create service_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  user_id uuid REFERENCES auth.users
);

-- Enable RLS
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Admins can manage service requests" ON service_requests;
  DROP POLICY IF EXISTS "Users can create service requests" ON service_requests;
END $$;

-- Create policies
CREATE POLICY "Admins can manage service requests"
  ON service_requests
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT user_id FROM admins));

CREATE POLICY "Users can create service requests"
  ON service_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);