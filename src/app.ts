import Lesson from "./classes/Lesson";
import Matter from "./classes/Matter";
import Student from "./classes/Student";
import Teacher from "./classes/Teacher";

function init() {
  const italian = new Matter("Italian");

  const italian_lesson = new Lesson(
    "Greetings in italian for beginners",
    italian,
    new Date("2021-10-10 19:00:00"),
    1
  );

  const student_1 = new Student("Bart", "Feest", 1);
  const student_2 = new Student("Nannie", "Terry", 2);
  const student_3 = new Student("Laurence", "Considine", 2);

  italian_lesson.add_student(student_1, student_2, student_3);

  const john_doe = new Teacher("John", "Doe", 1);
  john_doe.teach(italian_lesson);
}

init();
