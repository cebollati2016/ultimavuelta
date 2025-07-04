import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  postCourseController,
  getTagsController,
  getCourseDetailsController,
  postCourseDetailsController,
  delCourseController
} from "../controllers/course.controller.js";

const router = Router();

router.post("", authMiddleware, postCourseController)
router.delete("/:courseId", authMiddleware, delCourseController)

router.get("/details/:courseId", authMiddleware, getCourseDetailsController)
router.post("/details", authMiddleware, postCourseDetailsController);

router.get("/tag", authMiddleware, getTagsController);

export default router;
