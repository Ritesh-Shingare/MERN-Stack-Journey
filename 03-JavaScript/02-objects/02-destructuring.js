const student = {
name: "Ritz",
age: 18,
course: "Fullstack Development",
};

const updatedStudent = { ...student, course: "Mernstack", city: "Mumbai"
     } ;   // ... spread


console.log("Original Course:", student);
console.log("Updated Course:", updatedStudent);



const calculateSum = (...numbers) => {
    return numbers.reduce((total, number) => {
    return total + number;
}, 0);

}


console.log(calculateSum(10,20));
console.log(calculateSum(5, 10, 15, 20));




const calculateTotal = (...numbers) => {
    return numbers.reduce((total, number) => {
        return total + number ;

    

    }, 0);
}
console.log("Total numbers:", calculateTotal(100, 200, 50));



