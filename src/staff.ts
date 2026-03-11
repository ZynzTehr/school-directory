/* StaffRole type */
type StaffRole = "Teacher" | "Administrator" | "Custodian";

/* Staff class inherits from => Person */
class Staff extends Person {
  constructor(public name: string, public staffRole: StaffRole) {
    super(name);
  }
  public hasAccessToStaffLounge = true; // inherited from Person where it was false, set it to true for all staff
  public hasBuildingKey = false; // set to false by default, set to true in Custodian & Administrator classes
}