import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; // Unit tests were complaining without this.

import { Person, PersonConstants } from '../../classes';

@Injectable()
export class AppApiService {
  private url = PersonConstants.BASE_URL;         // URL to web api

  constructor(private http: Http) {}


  // Get full list of data
  getPeople(): Observable<any> {
    return this.http
               .get(this.url)
               .map((res: any) => res.json().data as Person[])
               .catch(this.handleError);  // TODO - Catch errors here or in call to this function?
  }


  // Get one person
  getPerson(id: number): Observable<Person> {
    let url = `${this.url}/${id}`;

    return this.http
               .get(url)
               .map((res: any) => res.json().data as Person[])
               .catch(this.handleError);
  }


  // Changes (add and update)
  save(person: Person): Observable<Person> {
    if (person.id) {
      return this.put(person);
    }
    return this.post(person);
  }


  // Delete a person
  delete(person: Person): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${person.id}`;

    return this.http
               .delete(url, { headers: headers })
               .catch(this.handleError);
  }


  /*  Private methods   */

  // Add new Person
  // TODO - Why does Observable<Person> cause a tslint error?
  private post(person: Person): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http
               .post(this.url, JSON.stringify(person), { headers: headers })
               .map((res: any) => res.json().data)
               .catch(this.handleError);
  }


  // Update existing Person
  // TODO - Why does Observable<Person> cause a tslint error?
  private put(person: Person): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${person.id}`;

    return this.http
               .put(url, JSON.stringify(person), { headers: headers })
               .map(() => person)
               .catch(this.handleError);
  }


  // Error handler
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
