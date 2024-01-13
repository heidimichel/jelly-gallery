import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JellyTopMenuComponent } from "./top-menu/jelly-top-menu.component";
import { JellyFooterComponent } from "./footer/jelly-footer.component";
import { JellySearchComponent } from './search/search.component';
import { JellyAboutComponent } from './about/about.component';
import { JellyHomeComponent } from './home/home.component';
import { JellyLoginComponent } from './login/login.component';

@Component({
    selector: 'jelly-root',
    standalone: true,
    templateUrl: './jelly.component.html',
    styleUrl: './jelly.component.scss',
    imports: [CommonModule, RouterOutlet, JellyTopMenuComponent, JellyFooterComponent, JellySearchComponent, JellyAboutComponent, JellyHomeComponent, JellyLoginComponent]
})
export class JellyComponent {
  title = 'jelly-gallery';
}
