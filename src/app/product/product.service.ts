import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, map, of } from 'rxjs';
import { Product } from './product.model';
import { PRODUCTS } from '../../assets/data/mock-shoes';

@Injectable({ providedIn: 'root' })
export class ProductService {
  //path = '/assets/data/fakeshoes.json';  //todo: remove this as soon as I have a working backend
  //path = `/api/products`; //path for the future, for now we don't have a real API
  path = '/assets/data/mock-shoes.ts';
  
  constructor(private http: HttpClient,

  ) {}

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS); //this particular way works best while I don't have a back end.
    return products;
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}
