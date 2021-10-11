import Lesson from "./Lesson";

export default class Matter {
  private _name: string;
  private _lessons: Array<Lesson> = []; //Matter has many Lessons

  constructor(name: string) {
    if (name === undefined) throw new Error(`name must be defined`);

    this._name = name;
  }
  public get name(): string {
    return this._name;
  }

  add_lesson(lesson: Lesson) {
    if (lesson === undefined) throw new Error(`lesson must be defined`);
    console.log(
      `📂 Matter : "${this._name}" has a new lesson : "${lesson.subject}"\n`
    );
    if (!this._lessons.find((element) => element.subject === lesson.subject))
      this._lessons.push(lesson);
    else
      throw new Error(
        `can't add "${lesson.add_student}" since its already belongs to "${this._name}"`
      );
  }
}
