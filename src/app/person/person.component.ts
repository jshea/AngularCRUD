import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
  <h2>People</h2>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class PersonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
