import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  activeFilters = signal<ProductFilters>({});
  searchResults = signal<Product[]>([]);
  initialText = "Use the left menu to search.";
  searchSubmitted = signal(false);
  isLoading = signal(false);

  private lastSearchedQuery = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const filters: ProductFilters = {
        name: params['name'] || null,
        brand: params['brand'] || null,
        productType: params['productType'] || null,
        heelHeight: params['heelHeight'] || null,
        colors: params['colors'] || null,
        year: params['year'] || null,
        features: params['features'] || null,
      };

      const hasActiveFilters = Object.values(filters).some((val) => val !== null && val !== '');
      if (hasActiveFilters) {
        this.activeFilters.set(filters);
        this.executeSearch(filters);
      }
    });
  }

  onSearch(filters: ProductFilters) {
    const queryParams: Record<string, string | number> = {};
    for (const [key, value] of Object.entries(filters)) {
      if (value !== null && value !== undefined && value !== '') {
        queryParams[key] = value;
      }
    }

    this.activeFilters.set(filters);
    this.executeSearch(filters);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  private executeSearch(filters: ProductFilters) {
    const queryString = JSON.stringify(filters);
    if (this.lastSearchedQuery === queryString && this.searchSubmitted()) {
      return;
    }
    this.lastSearchedQuery = queryString;

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
