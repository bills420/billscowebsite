/*
  # Add Job Applications Table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `position` (text)
      - `resume_url` (text)
      - `cover_letter_url` (text)
      - `status` (text)
      - `notes` (text)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS
    - Add policies for applicants and admins
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  position text NOT NULL,
  resume_url text NOT NULL,
  cover_letter_url text,
  status text NOT NULL DEFAULT 'pending',
  notes text,
  user_id uuid REFERENCES auth.users
);

-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can submit applications"
  ON job_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admins));

CREATE POLICY "Admins can update applications"
  ON job_applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT user_id FROM admins));