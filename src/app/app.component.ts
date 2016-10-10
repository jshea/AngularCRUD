import { Component, OnInit } from '@angular/core';

import { AppApiService } from './shared';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular 2 CRUD';

  constructor(public appApiService: AppApiService) {}

  ngOnInit() {
  }
}
