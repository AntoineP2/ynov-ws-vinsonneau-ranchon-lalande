import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { verifyIsRegister, registerDao } from "../dao/register.DAO";


export async function register(req: Request, res: Response){
    try {
        const {name, userMail, userPassword, userAge, isStudent} = req.body
        const isRegister = await verifyIsRegister({userMail})
        console.log(isRegister)
        if(isRegister){
            return res.status(400).json("User already exist")
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(userPassword, salt)
        await registerDao({name, userMail, userPassword: hashPassword, userAge, isStudent})
        return res.status(200).json(true)
    } catch (error) {
        return res.status(400).json(false)
    }
    
}