import { Router } from "express";
import { test } from "../controllers/test";


export const exempleRouter = Router();

exempleRouter.route("/ping").get(test);