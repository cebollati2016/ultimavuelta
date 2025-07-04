import { decode } from "../utils/encryption.util.js";

import { getUser } from "../db/user.db.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ err: "No token provided" });
    return;
  }

  try {
    const { userId } = decode(token);

    const user = await getUser({ userId });

    if (!user) {
      res.status(401).json({ err: "User not found" });
      return;
    }

    req.user = user;
  } catch (err) {
    console.error(err);
    res.status(401).json({ err: "Invalid or expired token" });
    return;
  }

  next();
};
