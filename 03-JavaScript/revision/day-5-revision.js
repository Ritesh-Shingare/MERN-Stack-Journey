const response = {
    data: {
        user: {
            name: "Ritz",
            profile: {
                username: "Ritz1234",
                location: {
                    state: "Delhi"
                }
            },
            skills: ["JavaScript", "Java"]
        }
    }
};

console.log("Name:", response.data?.user?.name);
console.log("UserName:", response.data?.user?.profile?.username);
console.log("City:", response.data?.user?.profile?.location?.state);
console.log("First skills:", response.data?.user?.skills?.[0]);