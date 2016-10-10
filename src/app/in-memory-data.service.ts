
// https://github.com/johnpapa/angular2-tour-of-heroes/blob/master/app/in-memory-data.service.ts

export class InMemoryDataService {

  createDb() {
    let people = [
      { id: '1', firstName: 'Fred',   lastName: 'Flintstone' },
      { id: '2', firstName: 'Wilma',  lastName: 'Flintstone' },
      { id: '3', firstName: 'Barney', lastName: 'Rubble' },
      { id: '4', firstName: 'Betty',  lastName: 'Rubble' }
    ];

    return { people };
  }

}
