import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { postAIExerciseController } from "../controllers/ai.exercise.controller.js";

const router = Router();

router.post("", authMiddleware, postAIExerciseController);

export default router;
