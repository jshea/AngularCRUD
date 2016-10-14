import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AppApiService, Person }  from './../../../shared';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  private person: Person = new Person();
  private dataLoading: boolean = false;
  private editForm: FormGroup;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public apiService: AppApiService,
              public fb: FormBuilder) {
    this.editForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      lastName:  ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      // address: this.fb.group({
        street: '',
        city:   '',
        state:  '',
        zip:    '',
      // }),
      // phone: this.fb.group({
        home:   ['', Validators.compose([Validators.minLength(10), Validators.maxLength(15)])],
        mobile: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(15)])]
      // })
    });
    // This requires all values to be set. Includes error handling.
    // this.form.setValue();

    // Can use subset/superset of values but no error handling/messaging.
    // this.editForm.patchValue({
    //   firstName: 'Jim',
    //   lastName: 'Shea'
    // });
  }

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
