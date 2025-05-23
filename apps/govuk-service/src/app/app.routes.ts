import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./demo/demo.component').then((m) => m.DemoComponent),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./forms/forms.component').then((m) => m.FormsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
