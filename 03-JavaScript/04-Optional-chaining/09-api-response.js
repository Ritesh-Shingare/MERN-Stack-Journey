const response = {
    data: {
        user: {
            name: "Ritz",
            hobbies: ["Football", "Criket", "Hockey"]
        }
    }
};
console.log("Name:", response.data?.user?.name);
console.log("First hobby:", response.data?.user?.hobbies?.[0] );
console.log("Third hobby:", response.data?.user?.hobbies?.[2] ?? "No hobby available" );