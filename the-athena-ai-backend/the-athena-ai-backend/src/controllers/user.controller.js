import { getUser } from "../db/user.db.js";

export const getUserController = async (req, res) => {
  const { id: userId } = req.user;

  res.json({ data: await getUser({ userId }) });
};
