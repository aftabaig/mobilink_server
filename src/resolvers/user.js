const bcrypt = require('bcrypt-nodejs');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    Mutation: {
        authenticate: async(parent, { email, password }, { models }) => {
            const user = await models.user.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                throw new Error("Bad credentials");
            }

            const matched = bcrypt.compareSync(
                password, 
                user.password
            );
            if (!matched) {
                throw new Error("Bad credentials");
            }

            const token = jsonwebtoken.sign(
                { 
                    id: user.id, 
                    email: user.email, 
                    firstName: user.firstName, 
                    lastName: user.lastName,
                    isAdmin: user.isAdmin
                },
                process.env.JWT_SECRET,
                { expiresIn: '1yr' }
            );
            return {
                user: user,
                token: token
            }
        },
        createUser: async(parent, { user }, { models, request }) => {

            isAuthenticated(request);
            isAdmin(request);

            const password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
            const newUser = await models.user.create({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: password,
                isAdmin: false
            });
            return newUser;
        }
    }
}