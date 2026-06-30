import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jelly-search-item',
  imports: [RouterLink],
  templateUrl: './search-item.html',
  styleUrl: './search-item.scss',
})
export class SearchItem {
  @Input() product!: Product;
}
