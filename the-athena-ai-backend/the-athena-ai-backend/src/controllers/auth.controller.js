import { passport } from "../configs/auth.config.js";

import { encode } from "../utils/encryption.util.js";

import { getLanguage, getLanguageDefault } from "../db/language.db.js";

const URL_AFTER_LOGIN = process.env.URL_AFTER_LOGIN;
const MAX_AGE_TOKEN = process.env.MAX_AGE_TOKEN;
const URL_AFTER_LOGOUT = process.env.URL_AFTER_LOGOUT;

export const login = async (req, res, next) => {
  const { lang } = req.query;

  let language = lang
    ? (await getLanguage({ value: lang })) || (await getLanguageDefault())
    : await getLanguageDefault();

  const state = { language };

  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
    state: JSON.stringify(state),
    prompt: "login",
  })(req, res, next);
};

export const afterLogin = (req, res) => {
  if (!req.user) {
    res.status(401).json({ err: "User not authenticated" });
  }

  const { id: userId } = req.user;

  const token = encode({ userId });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: MAX_AGE_TOKEN,
  });

  res.redirect(URL_AFTER_LOGIN);
};

export const logout = (req, res) => {
  res.clearCookie("token");

  res.redirect(URL_AFTER_LOGOUT);
};
