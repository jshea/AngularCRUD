import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { AppApiService, Person } from './../../../shared';

@Component({
  selector: 'app-person-detail',
  template: `
  <i *ngIf="dataLoading" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" aria-hidden="true"></i>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-header text-xs-center">Person Detail</div>
        <div id="personCard" class="card-block"
            *ngIf="person">
          {{person.firstName}} {{person.lastName}}
          <p>
          <p>
          <button id="editButton" class="btn btn-primary btn-sm"
                  (click)=onEdit(person)>
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
  `
})
export class PersonDetailComponent implements OnInit {
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

  onEdit(person: Person) {
    this.router.navigate(
      ['dashboard/edit/' + person.id]
    );
  }

}
