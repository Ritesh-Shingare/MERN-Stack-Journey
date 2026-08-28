const students = [
    {
        name: "Ritz",
        age: 18,
        course: "mern",
        marks: 95,
        isActive: true
    },
    {
        name: "Sam",
        age: 19,
        course: "web-dev",
        marks: 75,
        isActive: true
    },
    {
        name: "yash",
        age: 20,
        course: "full-stack",
        marks: 95,
        isActive: false
    },
    {
        name: "akash",
        age: 17,
        course: "dsa",
        marks: 65,
        isActive: false
    }
];

// FUNCTION
const getStudentName = (student) => {
    return student.name;
};
console.log("Student Name:", getStudentName(students[0]));

// DESTRUCTURING

const getStudentInfo = (student) => {
    const { name, marks, course} = student;
    return `${name} - ${marks} - ${course}`;
};
console.log("Student Info:", getStudentInfo(students[0]));

// map()
const studentNames = students.map((student) => {
    return student.name;
}
);
console.log("Student Names:", studentNames);

// filter()
const activeStudents = students.filter((student) => {

    return student.isActive === true;
});
console.log("Active Students:", activeStudents);

//filter() + map()
const mernStudent = students.filter((student) => {
    return student.course === "mern";
}
)
.map((student) => {

    return student.name;
});
console.log("Mern Stack Student:", mernStudent);

// find()
const findStudent = students.find((student) => {
    return student.name === "Sam";
}
);
console.log("Find Student:", findStudent);

// reduce()
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
},0);
console.log("Total Marks", totalMarks);

// Rest + reduce()
const calculateAvarage = (...marks) => {       //(...marks) returns [95, 75, 95, 65]
    const total = marks.reduce((sum, mark) => {
        return sum + mark;
    },0);
    return total / marks.length;
};
console.log("Marks Average:", calculateAvarage(95, 75, 95, 65));

