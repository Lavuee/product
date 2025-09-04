import { Routes } from '@angular/router';
import { Home } from './home/home';
import { List  } from './list/list';
import { Details } from './details/details';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "list", component: List},
    {path: "details/:id", component: Details}
];
