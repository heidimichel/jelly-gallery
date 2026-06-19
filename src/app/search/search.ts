import { Component, inject, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { ProductService } from '../product/product.service';
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
    if (this.searchResults.length === 0) { //TODO: temporary method to show 4 products for now. later, show a message like "use the left menu to search."
      this.productService.getProducts().subscribe(products => {
        this.searchResults = products.slice(0, 4);
      });
    }
  }
}
