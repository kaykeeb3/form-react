import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://cpvxnqfocypwqkehbmff.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdnhucWZvY3lwd3FrZWhibWZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTg0NDkzMywiZXhwIjoxOTk3NDIwOTMzfQ.zsQHTgJ_WzqiMDuSdGoSJ_cCgQdQiG70YJrlEITh9WE'
)