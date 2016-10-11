import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { AppApiService, Person } from './../../../shared';

@Component({
  selector: 'app-person-detail',
  template: `
  <i *ngIf="dataLoading" class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" aria-hidden="true"></i>
  <div class="row">
    <div class="col-sm-7">
      <div class="card">
        <div class="card-header text-xs-center">
          {{person.firstName}} {{person.lastName}}
        </div>
        <div id="personCard" class="card-block" *ngIf="person">
          <div class="row">
            <div class="col-sm-2">
              Address
            </div>
            <div class="col-sm-9">
               {{person.street}}<br>{{person.city}} {{person.state}} {{person.zip}}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              Home
            </div>
            <div class="col-sm-9">
               {{person.home}}
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              Mobile
            </div>
            <div class="col-sm-9">
               {{person.mobile}}
            </div>
          </div>

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
      ['person/edit/' + person.id]
    );
  }

}
