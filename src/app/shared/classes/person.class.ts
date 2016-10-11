export class Person {
  public id:        string;
  public firstName: string;
  public lastName:  string;
  public street:    string;
  public city:      string;
  public state:     string;
  public zip:       string;
  public home:      string;
  public mobile:    string;
  public email:     string;

  constructor(id ?: string, first ?: string, last ?: string) {
    if (id && first && last) {
      this.id = id;
      this.firstName = first;
      this.lastName = last;
    }
    else {
      this.id = '';
      this.firstName = '';
      this.lastName = '';
    }
  }

  get name(): string {
    return this.firstName + ' ' + this.lastName;
  }

  get address(): string {
    return this.street + ', ' + this.city + ' ' + this.state + ' ' + this.zip;
  }

}
