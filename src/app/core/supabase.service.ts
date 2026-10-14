import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabaseUrl = 'https://jpxclxskqcgqioarsryj.supabase.co';
  private supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweGNseHNrcWNncWlvYXJzcnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4OTc1MzcsImV4cCI6MjEwNzQ3MzUzN30.bNEV8_enYaMa-hxSWhqEvFtd8RlA3V2tHKM_Mf9R-Qc';
  public client: SupabaseClient;

  constructor() {
    this.client = createClient(this.supabaseUrl, this.supabaseAnonKey);
  }
}