import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Person, PersonConstants } from '../../classes';

/*
 * No need to worry about Providers/Services/Factories - which to use. Just
 * decorate a class with @Injectable()!
 */
@Injectable()
export class AppApiService {
  private url = PersonConstants.BASE_URL;         // URL to web service api

  constructor(private http: Http) {}


  /**
   * Get full list of data
   *
   * @returns {Observable<any>}
   *
   * @memberOf AppApiService
   */
  getPeople(): Observable<any> {
    return this.http
               .get(this.url)
               .map((res: any) => res.json().data as Person[])
               .catch(this.handleError);  // TODO - Catch errors here or in a call to this function?
  }


  /**
   * Get one person
   *
   * @param {number} id
   * @returns {Observable<Person>}
   *
   * @memberOf AppApiService
   */
  getPerson(id: number): Observable<Person> {
    /*
     * ${} is ES6 variable interpolation
     *    https://developers.google.com/web/updates/2015/01/ES6-Template-Strings
     */
    let url = `${this.url}/${id}`;

    return this.http
               .get(url)
               .map((res: any) => res.json().data as Person[])
               .catch(this.handleError);
  }


  /**
   * Changes (add and update)
   *
   * @param {Person} person
   * @returns {Observable<Person>}
   *
   * @memberOf AppApiService
   */
  save(person: Person): Observable<Person> {
    if (person.id) {
      return this.put(person);
    }
    return this.post(person);
  }


  /**
   * Delete a person
   *
   * @param {Person} person
   * @returns {Observable<any>}
   *
   * @memberOf AppApiService
   */
  delete(person: Person): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${person.id}`;

    return this.http
               .delete(url, { headers: headers })
               .catch(this.handleError);
  }


  /*  Private methods   */

  /**
   * Add new Person
   * TODO - Why does Observable<Person> cause a tslint error?
   *
   * @private
   * @param {Person} person
   * @returns {Observable<any>}
   *
   * @memberOf AppApiService
   */
  private post(person: Person): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http
               .post(this.url, JSON.stringify(person), { headers: headers })
               .map((res: any) => res.json().data)
               .catch(this.handleError);
  }


  /**
   * Update existing Person
   * TODO - Why does Observable<Person> cause a tslint error?
   *
   * @private
   * @param {Person} person
   * @returns {Observable<any>}
   *
   * @memberOf AppApiService
   */
  private put(person: Person): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${person.id}`;

    return this.http
               .put(url, JSON.stringify(person), { headers: headers })
               .map(() => person)
               .catch(this.handleError);
  }


  /**
   * Error handler
   *
   * @private
   * @param {*} error
   * @returns
   *
   * @memberOf AppApiService
   */
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
