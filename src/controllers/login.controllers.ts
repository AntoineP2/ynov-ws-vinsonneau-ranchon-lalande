import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { loginDao } from "../dao/login.DAO";
import * as bcrypt from "bcrypt";


export async function login(req: Request, res: Response){
    try {
        const {userMail, userPassword} = req.body
        const userInfo = await loginDao(userMail)
        if (!userInfo){
            return res.status(400).json("No user found")
        }
        const result = await bcrypt.compare(userPassword, userInfo.password);
        if (!result){
            return res.status(400).json("Wrong password")
        }
        const userInfoToken = {
            email: userInfo.email,
            name: userInfo.name,
            age: userInfo.age,
            isStudent: userInfo.isStudent
        }
        const token = jwt.sign({userInfo : userInfoToken}, "mdpSecret", { expiresIn: '24h'})
        var decoded = jwt.verify(token, 'mdpSecret');
        return res.status(200).json(decoded)
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}