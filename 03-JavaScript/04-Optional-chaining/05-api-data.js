const user = {
    name: "Ritz",
    profile: {
        username: "Ritz123",
    }
};

console.log("UserName:", user.profile?.username);
console.log("Bio:", user.profile?.bio ?? "No bio available");