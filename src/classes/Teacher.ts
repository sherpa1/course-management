import People from "./People";
import Course from "./Course";

export default class Teacher extends People {
  private _current_course;
  private _courses: Array<Course> = []; //Teacher has many courses

  public get current_course() {
    return this._current_course;
  }

  constructor(
    firstname_arg: string,
    lastname_arg: string,
    gender_arg?: number
  ) {
    super(firstname_arg, lastname_arg, gender_arg);
  }

  add_course(...courses: Array<Course>) {
    for (const course of courses) {
      if (
        !this._courses.findIndex(
          (element) => element.subject === course.subject
        )
      )
        this._courses.push(course);
      else
        throw new Error(
          `Course "${course.subject}" already belongs to ${this.fullname}`
        );
      console.log(
        `🤵‍ Teacher : "${this.fullname}" has a new Course "${course.subject}"\n`
      );
    }
  }

  teach(course: Course) {
    if (course === undefined)
      throw new Error(`Course argument must be defined`);

    if (
      !this._courses.findIndex((element) => element.subject === course.subject)
    )
      throw new Error(
        `Course "${course.subject}" is not part of ${this.fullname}'s courses`
      );

    this._current_course = course;
    this._current_course.teacher = this;
    console.log(
      `🤵‍ Teacher "${this.fullname}" is teaching Course "${course.subject}"\n`
    );
    course.start();
    course.end();
  }
}
