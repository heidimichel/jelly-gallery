import { Component } from '@angular/core';
import { Brand, Colors, HeelHeight, ProductType } from '../product/product.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  searchForm = new FormGroup({
    freeSearch: new FormControl(''), //free text
    year: new FormControl(''), //limit typing to numbers? TODO: add validator
    productType: new FormControl(''), //limit to existing types. TODO: create validator
    heelHeight: new FormControl(''), //limit to existing types. TODO: create validator
    brand: new FormControl(''), //limit to existing types. TODO: create validator
    features: new FormControl(''), //not implemented in the template yet, should be a mix of dropdown and search
  });

  search() {
    //this will be the method that searches. TODO: actually make it work. The plan: use the search on the URL, and this method should emit an event or output so the Search can see it.
    console.log("congrats, you clicked! Your form contains: ", this.searchForm.value)
  }
}
