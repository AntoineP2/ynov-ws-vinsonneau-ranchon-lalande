import { Router } from "express";
import { test } from "../controllers/test";


export const exempleRouter = Router();

exempleRouter.route("/").get(test);