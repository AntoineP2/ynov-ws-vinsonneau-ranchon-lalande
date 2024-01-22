import { Router } from "express";
import { login } from "../controllers/login.controllers";
import { register } from "../controllers/register.controllers";


export const authRouter = Router();

authRouter.route("/login").get(login);
authRouter.route("/register").get(register);