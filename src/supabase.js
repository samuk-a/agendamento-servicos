import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oaymfxgxznxbquwbmbwk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9heW1meGd4em54YnF1d2JtYndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMjY4ODUsImV4cCI6MjAzMTYwMjg4NX0.pfLMPeMx4lk1JSoSKV9ZC3dcGISzTv5vKHSLHZKzcBg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;