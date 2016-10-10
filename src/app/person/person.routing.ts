import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent }       from './person.component';
import { PersonListComponent }   from './list';
import { PersonDetailComponent } from './detail';
import { PersonEditComponent }   from './edit';

const personRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
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

export const routing: ModuleWithProviders = RouterModule.forChild(personRoutes);
