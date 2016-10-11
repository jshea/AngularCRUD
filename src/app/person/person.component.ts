import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
  <div class="container">
    <p>
    <p>
    <router-outlet></router-outlet>
  </div>
  `
})
export class PersonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
