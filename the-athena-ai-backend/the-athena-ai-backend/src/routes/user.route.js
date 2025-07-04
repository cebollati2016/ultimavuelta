import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

import { getUserController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", authMiddleware, getUserController);

export default router;
