/* StudentYear type */
type StudentYear = "Freshman" | "Sophomore" | "Junior" | "Senior";

/* Student class inherits from => Person */
class Student extends Person {
  constructor(public name: string, public studentYear: StudentYear) {
    super(name);
  }
  // The grades property is not used anywhere yet, can you implement a function that uses it?
  public grades: { [courseName: string]: number } = {};
}