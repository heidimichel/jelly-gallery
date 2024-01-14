import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { JellyFooterComponent } from "./footer/jelly-footer.component";

@Component({
    selector: 'jelly-root',
    standalone: true,
    templateUrl: './jelly.component.html',
    styleUrl: './jelly.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, JellyFooterComponent ]
})
export class JellyComponent {
  title = 'jelly-gallery';
}
