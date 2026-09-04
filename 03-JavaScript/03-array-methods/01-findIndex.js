const students = [
  { name: "Ritz", marks: 95 },
  { name: "yash", marks: 75 },
  { name: "aryan", marks: 85 },
  { name: "sanket", marks: 95, course: "MCA" },
];

const yashIndex = (student) => {
  return student.marks === 75;
};
console.log("Yash Index:", students.findIndex(yashIndex));

const aryanIndex = students.findIndex((student) => {
    return student.marks === 85;
});
console.log("Aryan index:", aryanIndex);

const sanketIndex = students.findIndex((student) => {
    return student.course === "MCA";
});
console.log("Sanket Index:", sanketIndex);

const ritzIndex = students.findIndex((student) => {
    return student.name ==="Ritz";   
});
console.log("Ritz Index:", ritzIndex);

const studentIndext = students.findIndex((student) => {
    return student.marks > 100;
});
console.log("Student Index:", studentIndext);