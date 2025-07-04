import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  getAnswersController,
  getGoalAnswerController,
  postGoalAnswerController,
  getRoleAnswerController,
  postRoleAnswerController,
  getJobAnswerController,
  postJobAnswerController,
  getEducationAnswerController,
  postEducationAnswerController,
} from "../controllers/answer.controller.js";

const router = Router();

router.get("", authMiddleware, getAnswersController);

router.get("/goal", authMiddleware, getGoalAnswerController);
router.post("/goal", authMiddleware, postGoalAnswerController);

router.get("/role", authMiddleware, getRoleAnswerController);
router.post("/role", authMiddleware, postRoleAnswerController);

router.get("/job", authMiddleware, getJobAnswerController);
router.post("/job", authMiddleware, postJobAnswerController);

router.get("/education", authMiddleware, getEducationAnswerController);
router.post("/education", authMiddleware, postEducationAnswerController);

export default router;
