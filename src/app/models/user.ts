export class User {
  id: number;
  name: string;
  lastName: string;
  username: string;
  pws: string;
  countryId: number;

  constructor(
    name?: string,
    lastName?: string,
    username?: string,
    pws?: string,
    countryId?: number) {
      this.name = name;
      this.lastName = lastName;
      this.username = username;
      this.pws = pws;
      this.countryId = countryId;
  }
}
