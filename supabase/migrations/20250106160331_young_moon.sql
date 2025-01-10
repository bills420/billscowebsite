/*
  # Service Requests Table

  1. New Tables
    - `service_requests`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `service` (text)
      - `message` (text)
      - `status` (text)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `service_requests` table
    - Add policies for admins to manage requests
*/

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

-- Policies
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