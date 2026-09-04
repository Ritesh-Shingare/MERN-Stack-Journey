const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 95 },
];

// Use reduce to calculate the total score of all students
const totalScore = (students) => {
    return students
    .reduce((total, student) => {
    return total + student.score;
},0)
};
console.log("Total Score:", totalScore(students)); // Output: 350

// reduce() + Condition
const studentsScore85Total = students.reduce((total, student) => {
    if (student.score >= 85) {
        return total + student.score;
    }
    return total;
}, 0);
console.log("Top Students Total Score:", studentsScore85Total); // Output: 272
