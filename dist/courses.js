"use strict";
/* Class for Course  */
class Course {
    constructor(courseName, teacher, students) {
        this.courseName = courseName;
        this.teacher = teacher;
        this.students = students;
        /* Private method to generate public gradebook property */
        this.generateGradeDictionary = () => {
            const grades = {};
            for (let student of this.students) {
                grades[student.name] = [];
            }
            return grades;
        };
        /* Public gradebook property for implementing GradeBook */
        this.gradeBook = this.generateGradeDictionary();
    }
}
