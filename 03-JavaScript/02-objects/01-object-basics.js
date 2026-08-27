const student = {
  name: "Ritz",
  age: 18,
  course: "FullStack Development",
  isActive: true,

  address: {
    city: "pune",
    state: "Maharashtra",
  },

  introduce: function() {
    return `Hello, I am ${this.name}`;
  }

};
console.log("name:", student.name);
console.log("course:", student["course"]);
console.log("Activity:", student.isActive);
console.log("Course:", student.course);

student.course ="MernStack Dev";
console.log("Updated Course:", student.course);

console.log("City:", student.address.city);
console.log("State:", student.address.state);

student.address.city = "Mumbai";
console.log("UpdatedCity:", student.address.city);


console.log("Introduce:", student.introduce());
