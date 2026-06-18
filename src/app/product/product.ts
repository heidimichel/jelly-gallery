import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'jelly-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class JellyProductComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  product?: Product;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id') ?? '000001'), //todo: remove this as soon as I have a working backend
        switchMap((id) => this.productService.getProductById(id))
      )
      .subscribe((product) => {
        this.product = product;
        console.log('Product:', product);
      });
  }
}
