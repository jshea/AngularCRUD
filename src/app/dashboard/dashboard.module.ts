import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';
import { routing }        from './dashboard.routing';

import { DashboardComponent }    from './dashboard.component';
import { PersonListComponent }   from './list';
import { PersonDetailComponent } from './detail';
import { PersonEditComponent }   from './edit';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent
  ]
})
export class DashboardModule {}
