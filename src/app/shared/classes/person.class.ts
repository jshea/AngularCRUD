import { Address, Phone } from './';

export class Person {
  public id:        number;
  public firstName: string;
  public lastName:  string;
  public address:   Address;
  public phone:     Phone;

  constructor(id ?: number, first ?: string, last ?: string) {
    if (id !== 0 && first && last) {
      this.id = id;
      this.firstName = first;
      this.lastName = last;
    }
    else {
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
    }
    this.address = new Address();
    this.phone = new Phone();
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
