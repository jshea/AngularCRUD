import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/person',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'person',
    component: PersonComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
