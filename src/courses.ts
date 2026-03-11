/* Gradebook type */
type GradeBook = { [k: string]: number[] };

/* Class for Course  */
class Course {
  constructor(
    public courseName: string,
    public teacher: Teacher,
    public students: Student[]
  ) {}

  /* Private method to generate public gradebook property */
  private generateGradeDictionary = (): GradeBook => {
    const grades: GradeBook = {};
    for (let student of this.students) {
      grades[student.name] = [];
    }
    return grades;
  };

  /* Public gradebook property for implementing GradeBook */
  public gradeBook: GradeBook = this.generateGradeDictionary();
}