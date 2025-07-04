import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

import { getCoursesController } from "../controllers/courses.controller.js";

const router = Router();

router.get("", authMiddleware, getCoursesController);

export default router;
