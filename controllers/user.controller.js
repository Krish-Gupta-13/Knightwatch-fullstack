import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

export const Signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }
    catch(err){
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists!"})
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });
    try{
        await user.save();
    }
    catch(err){
        console.log(err)
    }

    return res.status(201).json({message:user})
}

export const Login = async (req, res, next) => {
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email:email}); // finding exsting user
    }
    catch(err){
        return new Error(err);
    }

    if(!existingUser){
        return res.status(400).json({message: "User not found. Signup Please"})  
    }

    const isCorrectPassword = bcrypt.compareSync(password, existingUser.password);
    if(!isCorrectPassword){
        return res.status(400).json({message: "Invalid credentials"})
    } 

    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: "35d"
    })

    if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = "";
    }

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000*60*60*24*35), 
        httpOnly: true, 
        sameSite: "lax"
    })


    return  res.status(200).json({message: "Successfully Logged In", user: existingUser, token})
}


// TOKEN VERIFICATION 
export const VerifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    // console.log(cookies)
    const arr = cookies.split("=");
    const token = arr[arr.length - 1];
    console.log(token);
    if(!token){
        res.status(404).json({message: "No token found"})
    }
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            res.status(400).json({message:"invalid token"
            })
        }
        req.id = user.id;
    });
    // console.log(req.id);
    next();
}


// GETTING USER
export const GetUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try{
        user = await User.findById(userId, "-password");
    }
    catch(err){
        return new Error("getting user err",err);
    }
    if(!user){
        return res.status(403).json({message: "User not found"})
    }
    return res.status(200).json({user})
}

//REFRESH TOKEN

export const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if(!prevToken){
        return res.status(404).json({message: 'Couldnt find token'})
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            console.log("token verification error",err)
            return res.status(400).json({message:'Authentication failed'})
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: '35d'
        })

        res.cookie(String(user.id), token, {
            path: '/',
            expires: new Date(Date.now() + 1000*60*60*24), 
            httpOnly: true,
            sameSite: "lax"
        });
        req.id = user.id;
        next();
    })
}

export const Logout = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1];
    if(!prevToken){
        return res.status(404).json({message: 'Couldnt find token'})
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            console.log("prevtoken error",err)
            return res.status(400).json({message:'Authentication failed'})
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";
        return res.status(200).json({message: "successfully logged out"})
    })
}







