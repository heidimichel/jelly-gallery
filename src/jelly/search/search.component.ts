import { Component } from '@angular/core';
import { JellySideMenuComponent } from "../side-menu/jelly-side-menu.component";

@Component({
    selector: 'jelly-search',
    standalone: true,
    templateUrl: './search.component.html',
    imports: [JellySideMenuComponent]
})
export class JellySearchComponent {

}
