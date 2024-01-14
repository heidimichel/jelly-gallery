import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { JellyTopMenuComponent } from "./top-menu/jelly-top-menu.component";
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
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, JellyTopMenuComponent, JellyFooterComponent, JellySearchComponent, JellyAboutComponent, JellyHomeComponent, JellyLoginComponent]
})
export class JellyComponent {
  title = 'jelly-gallery';
}

export const routes: Routes = [
  { path: 'home', component: JellyHomeComponent },
  { path: 'about', component: JellyAboutComponent },
  { path: 'flavours', component: JellyFlavoursComponent },
  {
      path: 'search',
      component: JellySearchComponent,
  },
  { path: 'login', component: JellyLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
