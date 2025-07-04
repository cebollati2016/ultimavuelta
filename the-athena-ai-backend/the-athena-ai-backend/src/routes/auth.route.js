import { Router } from "express";

import passport from "passport";

import { login, afterLogin, logout } from "../controllers/auth.controller.js";

const router = Router();

router.get("/google", login);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  afterLogin
);

router.get("/logout", logout);

export default router;
