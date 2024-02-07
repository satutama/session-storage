import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/container', pathMatch: 'full' },
  {
    path: 'container',
    loadComponent: () =>
      import('./container/container.component').then(
        (mod) => mod.ContainerComponent
      ),
  },
];
