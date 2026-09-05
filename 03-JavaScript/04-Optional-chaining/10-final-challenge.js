const response = {
  data: {
    user: {
      name: "Ritz",
      profile: {
        username: "Ritz123",
        location: {
          city: "Mumbai"
        }
      },
      skills: ["JavaScript", "React"]
    }
  }
};

console.log("Name:", response.data?.user?.name);
console.log("Username:", response.data?.user?.profile?.username);
console.log("City:", response.data?.user?.profile?.location?.city);
console.log("First Skill:", response.data?.user?.skills?.[0]);
console.log("Third Skill:", response.data?.user?.skills?.[2] ?? "No skill available");
