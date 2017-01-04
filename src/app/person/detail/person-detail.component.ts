import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppApiService, Person }  from './../../shared';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  private person: Person = new Person();
  private dataLoading: boolean = false;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public apiService: AppApiService) { }

  ngOnInit() {
    this.dataLoading = true;

    this.route.params.subscribe((params: any) => {
      this.person.id = (params.id as number);

      this.apiService.getPerson(this.person.id).subscribe(
        (res: any) => {
          this.dataLoading = false;
          this.person = res;
        }
      );
    });
  }


  /**
   * Edit button handler. Navigates to the person detail edit component.
   *
   * @param {Person} person
   */
  onEdit(person2Edit: Person) {
    this.router.navigate(
      ['person/edit/' + person2Edit.id]
    );
  }


  /**
   * Deletes the current person and navigates to the people list.
   *
   * @param {Person} person
   */
  onDelete(person2Delete: Person) {
    // TODO - Data loading indicator isn't showing
    this.dataLoading = true;

    this.apiService.delete(person2Delete).subscribe(
      () => {
        this.dataLoading = false;
        // TODO - Why doesn't this navigate to /person, it seems
        //        to go to the root of the app, reloading data.
        // Chrome issue? Seems to work correctly on FF!
        this.router.navigate( ['person'] );
      }
    );
  }

}
