import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'jelly-search',
  imports: [Sidebar],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class JellySearchComponent {}
