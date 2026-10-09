import prisma from './prisma/prisma.client.js';

//create a new user
const newUser = await prisma.user.create({
    data: {
        email: "user@example.com"
    }
});

console.log("Created User:", newUser);