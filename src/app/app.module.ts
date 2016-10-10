import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }                  from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { DashboardModule } from './dashboard';
import { AppApiService }   from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    AppApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
