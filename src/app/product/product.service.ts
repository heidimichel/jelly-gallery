import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Product } from './product.model';
import { SupabaseService } from '../core/supabase.service';

export interface ProductFilters {
  name?: string | null;
  brand?: string | null;
  productType?: string | null;
  heelHeight?: string | null;
  colors?: string | null;
  year?: string | number | null;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  public supabase = inject(SupabaseService).client;

  getProducts(): Observable<Product[]> {
    return from(this.supabase.from('products').select('*')).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as Product[];
      })
    );
  }
  getProductById(id: string): Observable<Product | null> {
    return from(
      this.supabase.from('products').select('*').eq('id', id).single()
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as Product;
      })
    );
  }

  // Dynamic search using Supabase filters
  searchProducts(filters: ProductFilters): Observable<Product[]> {
    let query = this.supabase.from('products').select('*');
    if (filters.brand) {
      query = query.eq('brand', filters.brand);
    }
    if (filters.productType) {
      query = query.eq('type', filters.productType);
    }
    if (filters.heelHeight) {
      query = query.eq('heel_height', filters.heelHeight);
    }
    if (filters.year) {
      query = query.eq('year', Number(filters.year));
    }
    if (filters.name) {
      query = query.ilike('name', `%${filters.name.trim()}%`);
    }
    if (filters.colors) {
      // Postgres array check: does the colors array contain this color?
      query = query.contains('colors', [filters.colors]);
    }
    return from(query).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as Product[];
      })
    );
  }
}
