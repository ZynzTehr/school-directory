const { log } = console;
/* Reading in data file */
document
  .getElementById("inputfile")!
  .addEventListener("change", function (e: Event) {
    const files = (<HTMLInputElement>e.target).files;
    if (files && files.length > 0) {
      let file = files[0];
      var fr = new FileReader();
      fr.onload = function () {
        const myData = fr.result?.toString();
        if (myData) {
          readDataFiles(myData);
        }
      };
      fr.readAsText(file);
    }
  });

/* Store all student, staff, course data in dictionaries */
let allStudents: { [studentName: string]: Student } = {};
let allStaff: { [staffName: string]: Staff } = {};
let allCourses: { [courseName: string]: Course } = {};

/* Reading and storing data from file into data structures */
function readDataFiles(textFileData: string): void {
  const [textFilePersonData, textFileCourseData] = textFileData.split("/");
  readPersonData(textFilePersonData);
  readCourseData(textFileCourseData);
  main();
}

/* Read first half of our data file that has person data */
function readPersonData(textFilePersonData: string): void {

  // Store each individual's data (each new line) in separate index of our array
  const allPersonData: string[] = textFilePersonData.trim().split(/\r?\n/);

  // Iterate through array of all person data
  for (const personData of allPersonData) {

    // Split person data into name and role
    const [name, role, year] = personData.split(", ");

    // Depending on the role, add to either Staff or Student dictionaries
    switch (role) {
      case "student":
        switch (year) {
          case "freshman":
            allStudents[name] = new Student(name, "Freshman");
            break;
          case "sophomore":
            allStudents[name] = new Student(name, "Sophomore");
            break;
          case "junior":
            allStudents[name] = new Student(name, "Junior");
            break;
          case "senior":
            allStudents[name] = new Student(name, "Senior");
            break;
        }
        break;
      case "teacher":
        allStaff[name] = new Teacher(name, "Teacher"); // Staff objects must include a StaffRole property unpon declaration
        break;
      case "administrator":
        allStaff[name] = new Administrator(name, "Administrator"); // Staff objects must include a StaffRole property unpon declaration
        break;
      case "custodian":
        allStaff[name] = new Custodian(name, "Custodian"); // Staff objects must include a StaffRole property unpon declaration
        break;
    }
  }
}

/* Read second half of our data file that has course data */
function readCourseData(textFileCourseData: string): void {

  // Store each course's data (each new line) in separate index of our array
  const allCourseData: string[] = textFileCourseData.trim().split(/\r?\n/);

  // Iterate through array of all course data
  for (const courseData of allCourseData) {

    // Split course data into relevent elements
    const courseDataArray: string[] = courseData.split("; ");
    const courseName: string = courseDataArray[0];
    const teacherName: string = courseDataArray[1];
    const studentNames: string[] = courseDataArray[2].split(", ");

    // Call our createNewCourse helper function
    const newCourse = createNewCourse(courseName, teacherName, studentNames);
    if (newCourse) { // Check to make sure our function didn't return null
      allCourses[courseName] = newCourse; // Add to our Courses dictionary
    }
  }
}

/* Helper function that takes information about a course and returns a new instance of Course */
function createNewCourse(courseName: string, teacher: string, students: string[]): Course | null {
  let courseStudents: Student[] = [];
  let courseTeacher: Teacher;

  // Iterate through array of students
  for (let student of students) {

    // If the student's name exists in our dictionary of students, add their Student object to our Student array
    // If not, display an error
    if (allStudents[student]) {
      courseStudents.push(allStudents[student]);
    } else {
      log(`"${student}" is not a student in our database.`);
    }
  }

  // If the teacher's name exists in our dictionary of students, return a new Course object
  // If not, display an error and return null
  if (allStaff[teacher] instanceof Teacher) {
    courseTeacher = allStaff[teacher];
    return new Course(courseName, courseTeacher, courseStudents);
  } else {
    log(`"${teacher}" is not a teacher in our database.`);
    return null;
  }
}

/* Get all student and staff emails to make an annoucement */
function getAllEmails(): string[] {
  let emails: string[] = [];

  // Iterate through students and staff dictionaries and return emails for each individual
  for (let student in allStudents) {
    emails.push(allStudents[student].email);
  }
  for (let staff in allStaff) {
    emails.push(allStaff[staff].email);
  }
  return emails;
}

/* Get all student in a particular year */
function getAllStudentInYear(studentYear: StudentYear): Student[] {
  let allStudentsInYear: Student[] = [];
  for (let student in allStudents) {
    if (allStudents[student].studentYear === studentYear) {
      allStudentsInYear.push(allStudents[student]);
    }
  }
  return allStudentsInYear;
}

/* Check whether someone has access to the lounge */
function checkStaffLoungeAccess(person: Person): boolean {
  return person.hasAccessToStaffLounge;
}

/* Check whether someone has access to the building key*/
function checkBuildingKeyAccess(person: Person): boolean {
  if (person instanceof Staff) return person.hasBuildingKey;
  return false;
}

/* Main function to call other function; called once the data is read-in */
function main(): void {

  // Log all of our read-in data from our data structures so that we can see it in the console
  log("All Students:", allStudents);
  log("All Staff:", allStaff);
  log("All Courses:", allCourses);

  // Get all student and staff emails
  log("All Email Address:", getAllEmails());

  // Get all sophomore students
  let year: StudentYear = "Sophomore";
  log(`All ${year} Students:`, getAllStudentInYear(year));

  // Check staff lounge and building key access for several indvidiuals 
  let personName: string = "Rei Ayanami";
  log(`${personName} has access to the staff lounge: `, checkStaffLoungeAccess(allStudents[personName]));
  log(`${personName} has access to the building key: `, checkBuildingKeyAccess(allStudents[personName]));

  personName = "Lain Iwakura";
  log(`${personName} has access to the staff lounge: `, checkStaffLoungeAccess(allStaff[personName]));
  log(`${personName} has access to the building key: `, checkBuildingKeyAccess(allStaff[personName]));

  personName = "Gendo Ikary";
  log(`${personName} has access to the staff lounge: `, checkStaffLoungeAccess(allStaff[personName]));
  log(`${personName} has access to the building key: `, checkBuildingKeyAccess(allStaff[personName]));
}