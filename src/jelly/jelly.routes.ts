import { Routes } from '@angular/router';
import { JellyAboutComponent } from './about/about.component';
import { JellyHomeComponent } from './home/home.component';
import { JellyLoginComponent } from './login/login.component';
import { JellySearchComponent } from './search/search.component';
import { JellyFlavoursComponent } from './flavours/flavours.component';

export const routes: Routes = [
    { path: 'home', component: JellyHomeComponent },
    { path: 'about', component: JellyAboutComponent },
    { path: 'flavours', component: JellyFlavoursComponent },
    {
        path: 'search',
        component: JellySearchComponent,
        /*children: [
            {
              path: 'child-a',
              component: ChildAComponent,
            },
            {
              path: 'child-b',
              component: ChildBComponent,
            },
          ],*/
    },
    { path: 'login', component: JellyLoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent },
    // todo: create 404 page. this should always be the last one on the routing.
];
/*
Schematics (or, what I want to do):
- main component (jelly)
    - top-menu
    - content (where everything will load)
        - home page
        - about page
        - login page
        - search page
            - side menu
            - search results
                - result (a miniature)
                (clicking on the search result leads to the product page)
    - footer
*/
