const jwt = require("jsonwebtoken");
const User = require("../db/models").user;
const nodemailer = require("nodemailer");

module.exports = {
    authenticate,
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    resetPassword,
    changePassword,
    logout
}

function authenticate(request, response) {

    var email = request.body.email;
    var password = request.body.password;

    User.findOne({ 
        where: {
            email: email
        } 
    }).then(user => {
        if (user) {
            if (user.isValidPassword(password)) {
                var token = jwt.sign(JSON.stringify(user), "j4d893d89457hddkrh8j58j589kd5jk8dj85jj485thhu34d895kd8jd0krimv02==");
                response.json({
                    "user": user,
                    "token": token
                });
            }
            else {
                response.status(401).send({
                    "message": "Invalid credentials"
                });
            }
        }
        else {
            response.status(401).send({
                "message": "Invalid credentials"
            });
        }
    })
    .catch(error => {
        console.dir(error);
        response.status(400).send(error);
    })
}

function listUsers(request, response) {
    User.findAll({
        where: {
            isAdmin: false
        }
    }).then(users => {
        response.json({
            "users": users
        });
    })
    .catch(error => {
        response.status(400).send(error);
    })
}

function createUser(request, response) {
    var user = {}
    user.firstName = request.body.firstName;
    user.lastName = request.body.lastName;
    user.email = request.body.email;
    user.password = User.generateHash(request.body.password);
    user.isAdmin = false;
    User.emailCount(user.email).then(count => {
        if (count > 0) {
            response.status(400).send({
                message: "Sorry, this email is already taken."
            })
        }
        else {
            User.create(user)
            .then(user => 
                response.status(200).send(user)
            )
            .catch(error => 
                response.status(400).send(error.errors[0])
            )
        }
    })
}

function updateUser(request, response) {

}

function deleteUser(request, response) {
    User.destroy({
        where: {
            id: request.params.userId
        }
    }).then(userId => {
        response.status(200).send(request.params.userId);
        console.log(userId);
    });
}

function resetPassword(request, response) {

}

function changePassword(request, response) {

} 

function logout(request, response) {

}



