export class Address {
  public street:    string;
  public city:      string;
  public state:     string;
  public zip:       string;

  getAddress(): string {
    return this.street + ', ' + this.city + ' ' + this.state + ' ' + this.zip;
  }

}
