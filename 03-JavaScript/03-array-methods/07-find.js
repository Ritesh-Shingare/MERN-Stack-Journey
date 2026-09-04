const students = [
  { name: "Ritz", score: 95, course: "MERN" },
  { name: "Yash", score: 75, course: "Python" },
  { name: "Aryan", score: 85, course: "MERN" },
  { name: "Sanket", score: 65, course: "Java" },
];

const topStudent = students.find((student) => {
    return student.score >= 90;
});
console.log("Top Student:", topStudent.name);
console.log("Top Student:", topStudent); // Output: Ritz

const getTopMernStudents = (students) => {
    return students
        .filter((student) => {
            return student.course === "MERN";
        })
        .filter((student) => {
            return student.score >= 80;
        })
        .map((student) => {
            return student.name;
        });
};
console.log("TOP Mern Students:", getTopMernStudents(students));
