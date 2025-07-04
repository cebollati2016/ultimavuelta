import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  postAICourseDetailsDescriptionController,
  postAICourseDetailsTitleController,
  postAICourseDetailsTitleQuestionsController,
  postAICourseDetailsDescriptionQuestionsController,
  postAICourseDetailsSectionsController,
  getAICourseDetailsSectionIdController,
} from "../controllers/ai.course.controller.js";

const router = Router();

router.post("/title", authMiddleware, postAICourseDetailsTitleController);
router.post(
  "/title/question",
  authMiddleware,
  postAICourseDetailsTitleQuestionsController
);
router.post(
  "/description",
  authMiddleware,
  postAICourseDetailsDescriptionController
);
router.post(
  "/description/question",
  authMiddleware,
  postAICourseDetailsDescriptionQuestionsController
);
router.get("/section/id", authMiddleware, getAICourseDetailsSectionIdController)
router.post("/sections", authMiddleware, postAICourseDetailsSectionsController)

export default router;
