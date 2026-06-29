
DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_submissions;

CREATE POLICY "Public contact submissions"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(name)) > 0
    AND char_length(btrim(email)) >= 3
    AND position('@' IN email) > 1
    AND char_length(btrim(message)) >= 10
  );
