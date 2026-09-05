const user = {
    name: "Ritz",
    profile: {
        username: "Ritz123",
        details: {
            city: "mumbai",
        }
    }
};
console.log("Username:", user.profile?.username);
console.log("City:", user.profile?.details?.city);
console.log("Phone number:", user.profile?.number ?? "Not Available");