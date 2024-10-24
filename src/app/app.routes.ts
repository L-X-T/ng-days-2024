import { Route } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';

// import flightRoutes from './flights/flights.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },

  {
    path: 'flights',
    // children: flightRoutes,
    loadChildren: () => import('./flights/flights.routes'),
  },

  {
    path: 'charts',
    loadComponent: () => import('./charts/charts.component'),
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
