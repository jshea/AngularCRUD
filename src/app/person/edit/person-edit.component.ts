import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AppApiService, Person }  from './../../shared';

/**
 * Edit (Add and Update) component. Uses reactive forms. Very similar to:
 *   http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html
 *
 * @export
 * @class PersonEditComponent
 * @implements {OnInit}
 */
@Component({
  selector:    'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  public  person: Person = new Person();
  private dataLoading: boolean = false;
  public  editForm: FormGroup;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public apiService: AppApiService,
              public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id:         '', // string is an optional default value
      //         [value, synchronous validator, asynchronous validator]
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      lastName:  ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      address: this.formBuilder.group({
        street: '',
        city:   '',
        state:  '',
        zip:    ''
      }),
      phone: this.formBuilder.group({
        // Not required but if present must be between 10 and 15 chars.
        home:   ['', Validators.compose([Validators.minLength(10), Validators.maxLength(15)])],
        mobile: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(15)])]
      }),
      email: '',
    });


    /**
     * If this is called with a route param (a person id), then it's
     * in edit mode, othewise we are adding a new person.
     */
    this.route.params.subscribe((params: any) => {

      // If there's an id on the url - then we're an update, get the data from our REST api
      if (params.id) {
        this.dataLoading = true;
        this.person.id = params.id;

        this.apiService.getPerson(this.person.id).toPromise().then(
          (res: any) => {
            this.person = res;

            // TODO - Doesn't reset the validation on First and Last name labels.
            this.editForm.reset();
            this.editForm.controls['firstName'].updateValueAndValidity();

            this.dataLoading = false;

            // Can use subset/superset of values but no error handling/messaging.
            // this.editForm.patchValue(this.person);

            // Requires all values but allows error handling/messaging (I think Kara said this in her AC video)?
            // this.editForm.setValue(this.person);
          }
        );
      }
    });

  }


  /**
   * Save button handler. Saves changes and redirects to the people list.
   *
   * @memberOf PersonEditComponent
   */
  onSave() {
    this.dataLoading = true;    // TODO - Data loading indicator isn't showing

    this.apiService.save(this.person).toPromise().then(
      () => {
        this.dataLoading = false;
        this.router.navigate( ['person'] );
      }
    );
  }

}
