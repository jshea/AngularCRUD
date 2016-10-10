import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { AppApiService, Person }            from './../../../shared';

@Component({
  selector: 'app-person-edit',
  template: `
  <div class="container">
    <h1>Person Edit Form</h1>
    <form>
      <div class="form-group">
        <label for="name">First Name</label>
        <input type="text" name="firstName" class="form-control" id="firstName" required
        [(ngModel)]="person.firstName">
      </div>
      <div class="form-group">
        <label for="alterEgo">Last Name</label>
        <input type="text" name="lastName" class="form-control" id="lastName"
        [(ngModel)]="person.lastName">
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
