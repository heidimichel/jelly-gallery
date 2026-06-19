import { Component } from '@angular/core';
import { Brand, Colors, HeelHeight, ProductType } from '../product/product.model';

@Component({
  selector: 'jelly-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  colorOptions!: Colors[];
  productTypes!: ProductType[];
  brands!: Brand[];
  heelHeights!: HeelHeight[];
}
