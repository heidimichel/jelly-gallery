import { Component, inject, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { ProductFilters, ProductService } from '../product/product.service';
import { Product } from '../product/product.model';
import { SearchItem } from "../search-item/search-item";

@Component({
  selector: 'jelly-search',
  imports: [Sidebar, SearchItem],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class JellySearchComponent implements OnInit {
  private productService = inject(ProductService);
  searchResults: Product[] = [];
  ngOnInit() {
    // Initial load: show the first batch of products. TODO: check if this is the behavior I actually want, it looks kinda odd.
    this.productService.getProducts().subscribe(products => {
      this.searchResults = products.slice(0, 8);
    });
  }
  onSearch(filters: ProductFilters) {
    this.productService.searchProducts(filters).subscribe(products => {
      this.searchResults = products;
    });
  }
}
