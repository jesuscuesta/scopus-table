import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'scopus',
    loadComponent: () =>
      import('./pages/scopus/scopus.component').then(
        (mod) => mod.ScopusComponent
      ),
  },{
    path: 'wos',
    loadComponent: () =>
      import('./pages/wos/wos.component').then(
        (mod) => mod.WosComponent
      ),
  },
];
