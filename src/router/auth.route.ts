import { Router } from "express";
import { login } from "../controllers/login.controllers";
import { register } from "../controllers/register.controllers";


export const authRouter = Router();

authRouter.route("/login").post(login);
authRouter.route("/register").post(register);