import cookie from "cookie";

import { decode } from "../utils/encryption.util.js";
import { getUser } from "../db/user.db.js";

export const auth = async (socket, next) => {
  try {
    const cookies = cookie.parse(socket.handshake.headers.cookie || "");
    const token = cookies.token;
    if (!token) return next(new Error("No token"));

    const { userId } = decode(token);
    const user = await getUser({ userId });
    if (!user) return next(new Error("User not found"));

    socket.user = user;
    next();
  } catch (err) {
    console.error("WS auth error:", err);
    next(err);
  }
};
