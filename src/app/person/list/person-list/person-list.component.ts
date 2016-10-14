import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

import { AppApiService, Person }      from './../../../shared/';

@Component({
  selector: 'app-person-list',
  template: `
  <i *ngIf="dataLoading" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" aria-hidden="true"></i>

  <nav class="nav nav-inline">
    <a routerLink="/person" routerLinkActive="active" class="nav-link disabled">List</a>
    <a routerLink="/person/edit" routerLinkActive="active" class="nav-link">Add</a>
  </nav>
  <p>

  <ul>
    <li *ngFor="let person of people" (click)="onClick(person)">
      {{person.firstName}} {{person.lastName}}
    </li>
  </ul>
  `
})
export class PersonListComponent implements OnInit {
  public people: Array<Person> = [];
  private dataLoading: boolean = false;

  constructor(public apiService: AppApiService,
              public router: Router,
              public route: ActivatedRoute) {}

  ngOnInit() {
    this.dataLoading = true;

    this.apiService.getPeople().subscribe(
      (res: any) => {
        this.dataLoading = false;
        this.people = res;

        this.people.sort((a: Person, b: Person) =>  {

          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return -1;
          }
          else if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return 1;
          }
          else if (a.lastName.toLowerCase() === b.lastName.toLowerCase() && a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
          }
          else if (a.lastName.toLowerCase() === b.lastName.toLowerCase() && a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
          }
          else if (a.lastName.toLowerCase() === b.lastName.toLowerCase() && a.firstName.toLowerCase() === b.firstName.toLowerCase()) {
            return 0;
          }
          else {
            return 1;
          }
        });

      }
    );
  }

  onClick(aPerson: Person) {
    this.router.navigate(
      ['person/detail/' + aPerson.id]
    );
  }

}
