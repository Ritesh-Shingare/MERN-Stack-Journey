const students = [
  { name: "Ritz", marks: 95, course: "MERN", isActive: true },
  { name: "Yash", marks: 75, course: "Python", isActive: true },
  { name: "Aryan", marks: 85, course: "MERN", isActive: false },
  { name: "Sanket", marks: 65, course: "Java", isActive: true },
  { name: "Akash", marks: 92, course: "MERN", isActive: true },
];

const getActiveTopStudents = (students) => {
    return students
    .filter((student) => {
        return student.isActive === true;
    })
    .filter((student) => {
        return student.marks >= 80;
    })
.map((student) => {
    return student.name;
});
};

console.log("Active Top Students:", getActiveTopStudents(students));
