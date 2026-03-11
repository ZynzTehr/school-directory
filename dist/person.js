"use strict";
/* Person class */
class Person {
    constructor(name) {
        this.name = name;
        /* Private methods to generate public and protected properties */
        this.generateUserId = () => {
            return Math.floor(Math.random() * 10000);
        };
        this.generateUserName = () => {
            const [firstName, lastName] = this.name.split(" ");
            return `${firstName.charAt(0).toLowerCase()}.${lastName.toLowerCase()}`;
        };
        this.generatePassword = () => {
            return Math.random().toString(36).slice(-10);
        };
        /* Public and protected properties */
        this.userId = this.generateUserId();
        this.userName = this.generateUserName();
        this.email = `${this.userName}@school.edu`;
        this.password = this.generatePassword();
        this.hasAccessToStaffLounge = false; // set to false by default, set to true in Staff classes
    }
}
