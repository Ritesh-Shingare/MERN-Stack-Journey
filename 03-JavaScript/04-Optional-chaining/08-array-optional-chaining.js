const user = {
    name: "Ritz",
    skills: ["JavaScript", "React", "Node", "MongoDb"]
};
console.log("First Skill:", user.skills?.[0]);
console.log("Fifth Skill:", user.skills?.[4] ?? "Not Available");  //Call back "Not Avilable"