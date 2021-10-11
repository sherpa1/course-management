import Course from "./Course";

export default class Matter {
  private _name: string;
  private _courses: Array<Course> = []; //Matter has many Courses

  constructor(name: string) {
    if (name === undefined) throw new Error(`name must be defined`);

    this._name = name;
  }
  public get name(): string {
    return this._name;
  }

  add_course(course: Course) {
    if (course === undefined) throw new Error(`Course must be defined`);
    console.log(
      `📂 Matter : "${this._name}" has a new Course : "${course.subject}"\n`
    );
    if (!this._courses.find((element) => element.subject === course.subject))
      this._courses.push(course);
    else
      throw new Error(
        `can't add "${course.add_student}" since its already belongs to "${this._name}"`
      );
  }
}
