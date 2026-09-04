const students = [
    {   name: "Ritz", marks: 95 },
    {   name: "yash", marks: 75 },
    {   name: "aryan", marks: 85 },
    {   name: "sanket", marks: 95, course: "MCA" },

];


const highestMarks = students.some((student) => {
    return student.marks > 90;
});
console.log("Highest Marks Student:", highestMarks);
