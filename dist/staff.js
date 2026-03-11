"use strict";
/* Staff class inherits from => Person */
class Staff extends Person {
    constructor(name, staffRole) {
        super(name);
        this.name = name;
        this.staffRole = staffRole;
        this.hasAccessToStaffLounge = true; // inherited from Person where it was false, set it to true for all staff
        this.hasBuildingKey = false; // set to false by default, set to true in Custodian & Administrator classes
    }
}
