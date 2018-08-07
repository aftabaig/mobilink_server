const scopes = require("./scopes");
const jwt = require('express-jwt');
require('dotenv').config();

module.exports = {
    jwt: jwt({
        secret: process.env.JWT_SECRET,
        credentialsRequired: false
    }),
    isAuthenticated: (request) => {
        console.log(request.user);
        if (request.user == null) {
            console.log("You need to sign in");
            throw new Error("You need to sign in");
        }
    },
    isAdmin: (request) => {
        console.log(request.user);
        if (!request.user.isAdmin) {
            throw new Error("You are not authorized for this operation");
        }
    }
}