import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sjjpwoxuzbrspjpmbqoh.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqanB3b3h1emJyc3BqcG1icW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDQ2NjcsImV4cCI6MjAwNjgyMDY2N30.WgIoLYeR1brGXU7VM-IWF9xuufyANu-46n8L0t0yX7M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
