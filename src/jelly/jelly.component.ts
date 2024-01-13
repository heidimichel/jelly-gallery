import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JellyTopMenuComponent } from "./top-menu/jelly-top-menu.component";
import { JellyFooterComponent } from "./footer/jelly-footer.component";
import { JellySideMenuComponent } from "./side-menu/jelly-side-menu.component";

@Component({
    selector: 'jelly-root',
    standalone: true,
    templateUrl: './jelly.component.html',
    styleUrl: './jelly.component.scss',
    imports: [CommonModule, RouterOutlet, JellyTopMenuComponent, JellyFooterComponent, JellySideMenuComponent]
})
export class JellyComponent {
  title = 'jelly-gallery';
}
