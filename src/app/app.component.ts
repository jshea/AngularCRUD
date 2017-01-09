import { Component, OnInit } from '@angular/core';

import { AppApiService } from './shared';

@Component({
  selector: 'app-component',
  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="/">{{title}}</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a routerLink="/person" routerLinkActive="active" class="nav-link">People</a>
        </li>
        <li class="nav-item">
          <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public title: string = 'Angular CRUD';

  constructor(public appApiService: AppApiService) {}

  ngOnInit() { }

}
