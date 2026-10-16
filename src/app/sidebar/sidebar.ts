import { Component, EventEmitter, Output } from '@angular/core';
import { Brand, Colors, HeelHeight, ProductType } from '../product/product.model';
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

  @Output() searchSubmitted = new EventEmitter<ProductFilters>();

  searchForm = new FormGroup({
    name: new FormControl(''), //free text, use it to find the name.
    year: new FormControl(''), //limit typing to numbers? TODO: add validator
    productType: new FormControl(''),
    heelHeight: new FormControl(''),
    brand: new FormControl(''),
    colors: new FormControl(''),
    //TODO: implement feature search. Important so the front page can be used as a shortcut to boots, bags, sandals and other type of search.
    //features: new FormControl(''), //not implemented in the template yet, should be a mix of dropdown and search...
  });

  search() {
    this.searchSubmitted.emit(this.searchForm.value as ProductFilters);
    console.log("congrats, you clicked! Your form contains: ", this.searchForm.value)
  }
}
