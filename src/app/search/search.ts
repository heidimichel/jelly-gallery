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
  initialText = "Use the left menu to search.";
  searchSubmitted!: boolean;
  ngOnInit() {
    //this.searchSubmitted = false;
  }
  onSearch(filters: ProductFilters) {
    this.searchSubmitted = true;
    this.productService.searchProducts(filters).subscribe(products => {
      this.searchResults = products;
    });
  }
}
