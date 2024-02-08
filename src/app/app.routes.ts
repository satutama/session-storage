import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/session-storage', pathMatch: 'full' },
  {
    path: 'session-storage',
    loadComponent: () =>
      import('./container/container.component').then(
        (mod) => mod.ContainerComponent
      ),
  },
];
