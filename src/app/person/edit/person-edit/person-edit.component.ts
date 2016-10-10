import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppApiService, Person }  from './../../../shared';

@Component({
  selector: 'app-person-edit',
  template: `
  <div class="container">
    <h1>Person Edit Form</h1>

    <form>
      <div class="form-group row">
        <label for="firstName" class="col-sm-2 col-form-label">First</label>
        <div class="col-sm-10">
          <input type="text" id="firstName" name="firstName" class="form-control" required
          [(ngModel)]="person.firstName">
        </div>
      </div>
      <div class="form-group row">
        <label for="lastName" class="col-sm-2 col-form-label">Last</label>
        <div class="col-sm-10">
          <input type="text" name="lastName" id="lastName" class="form-control"
          [(ngModel)]="person.lastName">
        </div>
      </div>
      <button type="submit" class="btn btn-default"
              (click)=onSave(person)>
        Save
      </button>
    </form>

  </div>
  `
})
export class PersonEditComponent implements OnInit {
  private person: Person = new Person();
  private dataLoading: boolean = false;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public apiService: AppApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.person.id = params.id;
      this.dataLoading = true;

      this.apiService.getPerson(this.person.id).subscribe(
        (res: any) => {
          this.dataLoading = false;
          this.person = res;
        }
      );
    });
  }

  onSave(person: Person) {
    this.dataLoading = true;

    this.apiService.save(this.person).subscribe(
      (res: any) => {
        this.dataLoading = false;
        this.router.navigate( [''] );
      }
    );
  }

}
