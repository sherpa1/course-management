import People from "./People";
import Course from "./Course";

export default class Student extends People {
  private _courses: Array<Course> = []; //Student has and belongs to many Courses

  public get courses(): Array<Course> {
    return this._courses;
  }

  constructor(firstname_arg: string, lastname_arg: string, gender_arg: number) {
    super(firstname_arg, lastname_arg, gender_arg);
  }

  toString(): string {
    return `${this.fullname}`;
  }

  add_course(course: Course) {
    if (!this._courses.find((element) => element.subject === course.subject))
      this._courses.push(course);
    else
      throw new Error(
        `Course "${course.subject}" already belongs to ${this._fullname}`
      );
    console.log(
      `🤵‍ Student : "${this.fullname}" has a new Course : "${course.subject}" \n`
    );
  }
}
