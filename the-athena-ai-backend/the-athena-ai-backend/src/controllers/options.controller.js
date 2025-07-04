import {
  getGoalOptions,
  getRoleOptions,
  getJobOptions,
  getEducationOptions,
} from "../db/options.db.js";

export const getGoalOptionsController = async (req, res) => {
  const { languageId } = req.user;

  const data = await getGoalOptions({ languageId });

  res.json({ data });
};

export const getRoleOptionsController = async (req, res) => {
  const { languageId } = req.user;
  let { page, contains } = req.query;

  page = page || 0;
  contains = contains || "";

  const pageSize = 9;

  const data = await getRoleOptions({ languageId, page, pageSize, contains });

  res.json({ data });
};

export const getJobOptionsController = async (req, res) => {
  const { languageId } = req.user;
  let { contains } = req.query;

  const pageSize = 9;

  const data = await getJobOptions({ languageId, pageSize, contains });

  res.json({ data });
};

export const getEducationOptionsController = async (req, res) => {
  const { languageId } = req.user;

  const data = await getEducationOptions({ languageId });

  res.json({ data });
};
