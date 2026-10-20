import { Component, inject, signal } from '@angular/core';
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
export class JellySearchComponent {
  private productService = inject(ProductService);

  searchResults = signal<Product[]>([]);
  initialText = "Use the left menu to search.";
  searchSubmitted = signal(false);
  isLoading = signal(false);

  onSearch(filters: ProductFilters) {
    this.searchSubmitted.set(true);
    this.isLoading.set(true);

    this.productService.searchProducts(filters).subscribe({
      next: (products) => {
        this.searchResults.set(products);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }
}
