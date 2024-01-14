import { Routes } from '@angular/router';
import { JellyAboutComponent } from './about/about.component';
import { JellyHomeComponent } from './home/home.component';
import { JellyLoginComponent } from './login/login.component';
import { JellySearchComponent } from './search/search.component';
import { JellyFlavoursComponent } from './flavours/flavours.component';
import { JellyNotFoundComponent } from './not-found/not-found.component';

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
    { path: '**', component: JellyNotFoundComponent },
];
