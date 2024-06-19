import express from "express";
import { Signup, VerifyToken, GetUser, refreshToken, Logout } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";

const router = express.Router();

// routing to signup            
router.post('/signup', Signup)
router.post('/login', Login)
router.get('/user', VerifyToken, GetUser)
router.get('/refresh', refreshToken, VerifyToken, GetUser);
router.post('/logout', VerifyToken, Logout)
export default router