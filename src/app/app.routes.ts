import { Routes } from '@angular/router';
import { JellyHomeComponent } from './home/home';
import { JellyAboutComponent } from './about/about';
import {JellyFlavoursComponent }from './flavours/flavours';
import { JellySearchComponent } from './search/search';
import { JellyLoginComponent } from './login/login';
import { JellyNotFoundComponent } from './not-found/not-found';
import { JellyProductComponent } from './product/product';

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
    {
        path: 'product/:id',
        component: JellyProductComponent,
    },
    { path: 'login', component: JellyLoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: JellyNotFoundComponent },
];