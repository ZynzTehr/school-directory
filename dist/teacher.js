"use strict";
/* Teacher class inherits from => Staff interhits from => Person */
class Teacher extends Staff {
    constructor() {
        super(...arguments);
        // The optional courses property is not used anywhere yet, can you implement a function that uses it?
        this.courses = [];
    }
}
