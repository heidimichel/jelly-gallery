import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { JellyFooterComponent } from "./footer/jelly-footer.component";
import { JellySearchComponent } from './search/search.component';
import { JellyAboutComponent } from './about/about.component';
import { JellyHomeComponent } from './home/home.component';
import { JellyLoginComponent } from './login/login.component';
import { JellyFlavoursComponent } from './flavours/flavours.component';

@Component({
    selector: 'jelly-root',
    standalone: true,
    templateUrl: './jelly.component.html',
    styleUrl: './jelly.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, JellyFooterComponent, JellySearchComponent, JellyAboutComponent, JellyHomeComponent, JellyLoginComponent, JellyFlavoursComponent]
})
export class JellyComponent {
  title = 'jelly-gallery';
}
