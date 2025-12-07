const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

// this function for the login task
const register = async (request, response) => {
    try {

        const {name, email, password} = request.body;

        if(!name || !email || !password){
            return response.status(400)
                .json({
                    success: false,
                    message: "data field is require",
                });
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return response.status(400)
                .json({
                    success: false,
                    message: "user already exist",
                })
        }

        const hashPassword = await bcrypt.hash(password,10);

        const user = new userModel({
            name,
            email,
            password : hashPassword,
        });

        await user.save();

        return response.status(200)
            .json({
                success: true,
                message: "user created successfully",
                data: user,
            });
        
    } catch (err) {
        return response.status(500)
            .json({
                success: false,
                message : err.message,
            });
            console.log(err);
    }
}

// this function for the register router task
const login = async (request, response) => {
    try {
        const {email, password} = request.body;

        if(!email || !password){
            return response.status(400)
                .json({
                    success: false,
                    message: "All field is require",
                });
        }

        const existingUser = await userModel.findOne({email});

        if(!existingUser){
            return response.status(400)
                .json({
                    success: false,
                    message: "user does not exist",
                });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if(!passwordMatch){
            return response.status(400)
                .json({
                    success: false,
                    message: "given password is wrong",
                });
        }

        response.status(200)
            .json({
                success: true,
                message: "user Login successfully",
            });

    } catch (err) {
        return response.status(500)
            .json({
                success: false,
                message: err.message,
            });
    }
}

module.exports = {
    login,
    register
}