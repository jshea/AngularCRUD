import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <h2>People</h2>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
