
// https://github.com/johnpapa/angular2-tour-of-heroes/blob/master/app/in-memory-data.service.ts

export class InMemoryDataService {

  createDb() {
    let people = [
      {
        id: 1,
        firstName: 'James',
        lastName: 'Dilliard',
        address: {
          street: '6649 N Blue Gum St',
          city: 'New Orleans',
          state: 'LA',
          zip: '70116'
        },
        phone: {
          home: '504-621-8927',
          mobile: '504-845-1427'
        },
        email: 'jdilliard@gmail.com'
      },
      {
        id: 2,
        firstName: 'Josephine',
        lastName: 'Darakjy',
        address: {
          street: '4 B Blue Ridge Blvd',
          city: 'Brighton',
          state: 'MI',
          zip: '48116'
        },
        phone: {
          home: '810-292-9388',
          mobile: '810-374-9840'
        },
        email: 'josephine_darakjy@darakjy.org'
      },
      {
        id: 3,
        firstName: 'Art',
        lastName: 'Venere',
        address: {
          street: '8 W Cerritos Ave #54',
          city: 'Bridgeport',
          state: 'NJ',
          zip: '08014'
        },
        phone: {
          home: '856-636-8749',
          mobile: '856-264-4130'
        },
        email: 'art@venere.org'
      },
      {
        id: 4,
        firstName: 'Lenna',
        lastName: 'Paprocki',
        address: {
          street: '639 Main St',
          city: 'Anchorage',
          state: 'AK',
          zip: '99501'
        },
        phone: {
          home: '907-385-4412',
          mobile: '907-921-2010'
        },
        email: 'lpaprocki@hotmail.com'
      },
      {
        id: 5,
        firstName: 'Donette',
        lastName: 'Foller',
        address: {
          street: '34 Center St',
          city: 'Hamilton',
          state: 'OH',
          zip: '45011'
        },
        phone: {
          home: '513-570-1893',
          mobile: '513-549-4561'
        },
        email: 'donette.foller@cox.net'
      }
    ];

    return { people };
  }

}
