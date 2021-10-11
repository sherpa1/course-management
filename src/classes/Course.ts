import Matter from "./Matter";
import Student from "./Student";
import Teacher from "./Teacher";
import moment from "moment";

export default class Course {
  static COMING = "coming";
  static DOING = "doing";
  static DONE = "done";

  static STATES = [Course.COMING, Course.DOING, Course.DONE];

  private _start_at: Date;
  private _end_at: Date;

  private _state: string;
  private _subject: string;

  private _matter: Matter; //Course belongs to Matter
  private _students: Array<Student> = []; //Course has and belongs to many students
  private _teacher: Teacher; //Course has one Teacher

  private _duration: number;

  constructor(
    subject: string,
    matter: Matter,
    start_at: Date,
    duration: number
  ) {
    if (subject === undefined || subject === "")
      throw new Error(`subject arg must be defined`);

    this._subject = subject;

    if (duration === undefined || duration <= 0)
      throw new Error(`duration arg must be defined and greater than zero`);

    this._duration = duration;

    if (matter === undefined) throw new Error(`matter arg must be defined`);

    this._matter = matter;
    this._matter.add_course(this);

    if (start_at === undefined) throw new Error(`start_at must be defined`);

    this._start_at = start_at;

    this._end_at = moment(this._start_at).add(this._duration, "hour").toDate();

    this._state = Course.COMING;
  }

  start(): boolean {
    if (this._state === Course.COMING) {
      this._state = Course.DOING;
      console.log(
        `📘 Course : "${this.subject}" started ${moment(this._start_at).format(
          "DD/MM/YYYY HH:mm"
        )} \n`
      );
      return true;
    } else {
      throw new Error(
        `"${this.subject}" can't start as its current state is "${this._state}"`
      );
    }
  }

  end() {
    if (this._state === Course.DOING) {
      this._state = Course.DONE;
      console.log(
        `📘 Course : "${this.subject}" ended ${moment(this._end_at).format(
          "DD/MM/YYYY HH:mm"
        )} \n`
      );
      return true;
    } else {
      throw new Error(
        `"${this.subject}" can't end as its current state is "${this._state}"`
      );
    }
  }

  add_student(...students: Array<Student>) {
    for (const student of students) {
      if (
        !this._students.find((element) => element.fullname === student.fullname)
      ) {
        this._students.push(student);
        student.add_course(this);
        console.log(`📘 Course : has a new Student "${student.fullname}"\n`);
      } else {
        console.error(
          `Student : can't register to Course "${this.subject}" since he is already registered`
        );
      }
    }
  }

  toString(): string {
    return `Course : "${this.subject}" (${
      this._matter.name
    }), starts at : ${moment(this._start_at).format(
      "DD/MM/YYYY HH:mm"
    )} / ends at : ${moment(this._end_at).format("DD/MM/YYYY HH:mm")} `;
  }

  public get state(): string {
    return this._state;
  }

  public get subject(): string {
    return this._subject;
  }

  public set subject(value: string) {
    if (value === undefined || value === "")
      throw new Error(`value arg must be defined`);
    this._subject = value;
  }

  public get students(): Array<Student> {
    return this._students;
  }

  public get teacher(): Teacher {
    return this._teacher;
  }
  public set teacher(value: Teacher) {
    this._teacher = value;
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    if (value === undefined || value <= 0)
      throw new Error(`value arg must be defined and greater than zero`);
    this._duration = value;
  }
}
