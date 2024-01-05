import { Request, Response } from "express";

// Route pour tester la connexion à la base de données

export async function test(req: Request, res: Response){
    try {
        const result = {message: "pong"}
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json("Error here")
    }
    
}