import { TestBed } from '@angular/core/testing';
import { PersonComponent } from './person.component';

describe('Person', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [PersonComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(PersonComponent);
    expect(fixture.componentInstance instanceof PersonComponent).toBe(true, 'should create PersonComponent');
  });

});
