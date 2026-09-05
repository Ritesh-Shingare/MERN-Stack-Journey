const user = {
    name: "Ritz",
    profile: null,
};

console.log("Username:", user.profile?.username ?? "Guest");
console.log("Bio:", user.profile?.bio ?? "No bio available");