import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand, Colors, Features, HeelHeight, ProductType } from '../product/product.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductFilters } from '../product/product.service';

@Component({
  selector: 'jelly-sidebar',
  imports: [ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  colorOptions: Colors[] = Object.values(Colors) as Colors[];
  productTypes: ProductType[] = Object.values(ProductType) as ProductType[];
  brands: Brand[] = Object.values(Brand) as Brand[];
  heelHeights: HeelHeight[] = Object.values(HeelHeight) as HeelHeight[];
  features: Features[] = Object.values(Features) as Features[];

  @Input() set initialFilters(filters: ProductFilters | null) {
    if (filters) {
      this.searchForm.patchValue({
        name: filters.name ?? '',
        year: filters.year != null ? String(filters.year) : '',
        productType: filters.productType ?? '',
        heelHeight: filters.heelHeight ?? '',
        brand: filters.brand ?? '',
        colors: filters.colors ?? '',
        features: filters.features ?? '',
      }, { emitEvent: false });
    }
  }

  @Output() searchSubmitted = new EventEmitter<ProductFilters>();

  searchForm = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    productType: new FormControl(''),
    heelHeight: new FormControl(''),
    brand: new FormControl(''),
    colors: new FormControl(''),
    features: new FormControl(''), 
  });

  search() {
    this.searchSubmitted.emit(this.searchForm.value as ProductFilters);
  }
}
