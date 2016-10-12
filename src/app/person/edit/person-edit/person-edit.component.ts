import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppApiService, Person }  from './../../../shared';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  private person: Person = new Person();
  private dataLoading: boolean = false;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public apiService: AppApiService) { }

  ngOnInit() {
    this.dataLoading = true;

    /**
     * If this is called with a route param (a person id), then it's
     * in edit mode, othewise were adding a new person.
     */
    this.route.params.subscribe((params: any) => {

      if (params.id) {
        this.person.id = params.id;

        this.apiService.getPerson(this.person.id).subscribe(
          (res: any) => {
            this.dataLoading = false;
            this.person = res;
          }
        );
      }
    });

  }


  /**
   * Save button handler. Saves changes and redirects to the people list.
   *
   * @param {Person} person
   */
  onSave(person: Person) {
    // TODO - Data loading indicator isn't showing
    this.dataLoading = true;

    this.apiService.save(this.person).subscribe(
      (res: any) => {
        this.dataLoading = false;
        // TODO - Why doesn't this navigate to /person, it seems
        //        to go to the root of the app, reloading data.
        // Chrome issue? Seems to work correctly on FF!
        this.router.navigate( ['person'] );
      }
    );
  }

}
