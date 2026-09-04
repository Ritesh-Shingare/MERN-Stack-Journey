
const students = [
  { name: "Ritz", marks: 95, course: "MERN" },
  { name: "Yash", marks: 75, course: "Python" },
  { name: "Aryan", marks: 85, course: "MERN" },
  { name: "Sanket", marks: 65, course: "Python" },
];

const topMernStudents = students.filter((student) => {
    return student.course === "MERN" && student.marks >= 80;
});
console.log("Top Mern Students:", topMernStudents.map((student) => student.name));


const topPythonStudents = students.filter((student) => {
    return student.course === "Python";
})
.filter((student) => {
    return student.marks >=70;
})
.map((student) => {
    return student.name;
});

console.log("Top Python Students:", topPythonStudents);