import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }    from './dashboard.component';
import { PersonListComponent }   from './list';
import { PersonDetailComponent } from './detail';
import { PersonEditComponent }   from './edit';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PersonListComponent
      },
      {
        path: 'detail/:id',
        component: PersonDetailComponent
      },
      {
        path: 'edit/:id',
        component: PersonEditComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
