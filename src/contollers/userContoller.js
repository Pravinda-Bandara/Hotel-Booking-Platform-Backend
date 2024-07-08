import asyncHandler from 'express-async-handler';
import User from "../models/User.js";
import {generateToken} from "../utils/tokenUtils.js";
import bcrypt from 'bcryptjs';



export const signup = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({ message: 'Email is already registered' });
    }

    // If email is not registered, proceed to create a new user
    const user = await User.create({
        email,
        password: bcrypt.hashSync(password, 8),
        role: 'USER' // Default role is USER, you can change this if needed
    });

    res.send({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user),
    });
});


export const signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        // Send user info and token if credentials are correct
        res.send({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user),
        });
    } else {
        // Send error if credentials are incorrect
        res.status(401).send({ message: 'Invalid email or password' });
    }
});