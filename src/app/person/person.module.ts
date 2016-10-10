import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';
import { routing }        from './person.routing';

import { PersonComponent }       from './person.component';
import { PersonListComponent }   from './list';
import { PersonDetailComponent } from './detail';
import { PersonEditComponent }   from './edit';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    RouterModule,
    routing
  ],
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent
  ]
})
export class PersonModule {}
