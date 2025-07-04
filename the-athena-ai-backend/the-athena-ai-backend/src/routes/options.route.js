import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  getGoalOptionsController,
  getRoleOptionsController,
  getJobOptionsController,
  getEducationOptionsController,
} from "../controllers/options.controller.js";

const router = Router();

router.get("/goal", authMiddleware, getGoalOptionsController);
router.get("/role", authMiddleware, getRoleOptionsController);
router.get("/job", authMiddleware, getJobOptionsController);
router.get("/education", authMiddleware, getEducationOptionsController);

export default router;
