import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'jelly-search-item',
  imports: [],
  templateUrl: './search-item.html',
  styleUrl: './search-item.scss',
})
export class SearchItem {
  @Input() product!: Product;
}
