"use strict";
/* Student class inherits from => Person */
class Student extends Person {
    constructor(name, studentYear) {
        super(name);
        this.name = name;
        this.studentYear = studentYear;
        // The grades property is not used anywhere yet, can you implement a function that uses it?
        this.grades = {};
    }
}
