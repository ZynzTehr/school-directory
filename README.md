# School Directory

A TypeScript project demonstrating Object-Oriented Programming principles through class inheritance. It models a school system with a hierarchy of people including Students, Teachers, Administrators, and Custodians.

## Project Background

This project was built to practice TypeScript fundamentals — specifically class inheritance, access modifiers, typed properties, and working with generics and custom types. All data is parsed from a `.txt` file uploaded via a browser file input.

## Tech Stack

- TypeScript
- Vanilla JavaScript (compiled output)
- HTML

## Class Hierarchy

```
Person
├── Student
└── Staff
    ├── Teacher
    ├── Administrator
    └── Custodian
```

## How to Run

1. Install TypeScript:
   ```bash
   npm install
   ```

2. Compile TypeScript to JavaScript:
   ```bash
   npx tsc
   ```

3. Open `index.html` in your browser.

4. Click the file input and upload `data.txt`.

5. Open the browser **Developer Console** (`F12` → Console tab) to see the output — all students, staff, courses, emails, and access permissions will be logged there.

## Data File Format

The `data.txt` file is split into two sections by a `/` delimiter.

**Person section** (name, role, year for students):
```
John Doe, student, sophomore
Jane Smith, teacher
```

**Course section** (course name; teacher; comma-separated students):
```
Mathematics; Jane Smith; John Doe, Anne Brown
```
