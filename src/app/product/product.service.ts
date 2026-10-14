import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, from, map, of } from 'rxjs';
import { Product } from './product.model';
import { PRODUCTS } from '../../assets/data/mock-shoes';
import { SupabaseService } from '../core/supabase.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private supabase = inject(SupabaseService).client;
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
}
