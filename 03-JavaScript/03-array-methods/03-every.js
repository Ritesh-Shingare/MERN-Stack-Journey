students = [
  { name: "Ritz", marks: 95 },
  { name: "yash", marks: 75 },
  { name: "aryan", marks: 85 },
  { name: "sanket", marks: 95, course: "MCA" },
];

const allStudents = students.every((student) => {
  return student.marks >= 70;
});
console.log("All Students Passed:", allStudents);
