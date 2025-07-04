import { Router } from "express";

import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";
import optionsRouter from "./options.route.js";
import answerRouter from "./answer.route.js";
import courseRouter from "./course.route.js";
import coursesRouter from "./courses.route.js";
import aiCourseDetailsRouter from "./ai.course.route.js";
import aiChatRouter from "./ai.chat.route.js";
import aiExerciseRouter from "./ai.exercise.route.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

router.use("/options", optionsRouter);
router.use("/answer", answerRouter);

router.use("/course", courseRouter);
router.use("/courses", coursesRouter)
router.use("/ai/course/details", aiCourseDetailsRouter);

router.use("/ai/chat", aiChatRouter);

router.use("/ai/exercise", aiExerciseRouter);

export default router;
