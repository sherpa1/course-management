import People from "./People";
import Lesson from "./Lesson";

export default class Student extends People {
  private _lessons: Array<Lesson> = []; //Student has and belongs to many Lessons

  public get lessons(): Array<Lesson> {
    return this._lessons;
  }

  constructor(firstname_arg: string, lastname_arg: string, gender_arg: number) {
    super(firstname_arg, lastname_arg, gender_arg);
  }

  toString(): string {
    return `${this.fullname}`;
  }

  add_lesson(lesson: Lesson) {
    if (!this._lessons.find((element) => element.subject === lesson.subject))
      this._lessons.push(lesson);
    else
      throw new Error(
        `Lesson "${lesson.subject}" already belongs to ${this._fullname}`
      );
    console.log(
      `🤵‍ Student : "${this.fullname}" has a new lesson : "${lesson.subject}" \n`
    );
  }
}
