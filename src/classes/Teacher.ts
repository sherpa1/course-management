import People from "./People";
import Lesson from "./Lesson";

export default class Teacher extends People {
  private _current_lesson;
  private _lessons: Array<Lesson> = [];

  public get current_lesson() {
    return this._current_lesson;
  }

  constructor(
    firstname_arg: string,
    lastname_arg: string,
    gender_arg?: number
  ) {
    super(firstname_arg, lastname_arg, gender_arg);
  }

  add_lesson(...lessons: Array<Lesson>) {
    for (const lesson of lessons) {
      if (
        !this._lessons.findIndex(
          (element) => element.subject === lesson.subject
        )
      )
        this._lessons.push(lesson);
      else
        throw new Error(
          `Lesson "${lesson.subject}" already belongs to ${this.fullname}`
        );
      console.log(
        `🤵‍ Teacher : "${this.fullname}" has a new lesson "${lesson.subject}"\n`
      );
    }
  }

  teach(lesson: Lesson) {
    if (lesson === undefined)
      throw new Error(`lesson argument must be defined`);

    if (
      !this._lessons.findIndex((element) => element.subject === lesson.subject)
    )
      throw new Error(
        `Lesson "${lesson.subject}" is not part of ${this.fullname}'s lessons`
      );

    this._current_lesson = lesson;
    this._current_lesson.teacher = this;
    console.log(
      `🤵‍ Teacher "${this.fullname}" is teaching lesson "${lesson.subject}"\n`
    );
    lesson.start();
    lesson.end();
  }
}
