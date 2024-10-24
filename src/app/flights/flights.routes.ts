import { Routes } from '@angular/router';

export const flightRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'flight-search',
  },

  {
    path: 'flight-edit/:id',
    loadComponent: () => import('./flight-edit/flight-edit.component'),
  },

  {
    path: 'flight-search',
    loadComponent: () => import('./flight-search/flight-search.component'),
  },
];

export default flightRoutes;
