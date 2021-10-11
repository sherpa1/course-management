export default abstract class People {
  protected _firstname: string;
  protected _lastname: string;
  protected _fullname: string;
  protected _gender: number = 0; //0= unknown, 1 = male, 2 = female

  static readonly GENDERS: Array<number> = [0, 1, 2];

  constructor(
    firstname_arg: string,
    lastname_arg: string,
    gender_arg?: number
  ) {
    if (
      firstname_arg === "" ||
      lastname_arg === "" ||
      firstname_arg === undefined ||
      lastname_arg === undefined
    )
      throw new Error(
        `firstname and lastname arguments must be defined and not empty`
      );
    this._firstname = firstname_arg;
    this._lastname = lastname_arg;

    if (gender_arg !== undefined && People.GENDERS.indexOf(gender_arg) > -1)
      this._gender = gender_arg;
  }

  get firstname(): string {
    return this._firstname;
  }
  get lastname(): string {
    return this._lastname;
  }
  get fullname(): string {
    return this._firstname + " " + this._lastname;
  }
  get gender(): number {
    return this._gender;
  }
}
