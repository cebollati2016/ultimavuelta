import {
  getAnswers,
  getGoalAnswer,
  upsertGoalAnswer,
  getRoleAnswer,
  upsertRoleAnswer,
  getJobAnswer,
  upsertJobAnswer,
  getEducationAnswer,
  upsertEducationAnswer,
} from "../db/answer.db.js";

export const getAnswersController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await getAnswers({ userId });

  res.status(200).json({ data });
};

export const getGoalAnswerController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await getGoalAnswer({ userId, languageId });

  res.status(200).json({ data });
};
export const getRoleAnswerController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await getRoleAnswer({ userId, languageId });

  res.status(200).json({ data });
};

export const getJobAnswerController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await getJobAnswer({ userId, languageId });

  res.status(200).json({ data });
};

export const getEducationAnswerController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await getEducationAnswer({ userId });

  res.status(200).json({ data });
};

export const postGoalAnswerController = async (req, res) => {
  const { id: userId } = req.user;
  const { goalOptionId } = req.body;

  const data = await upsertGoalAnswer({ userId, goalOptionId });

  res.status(201).json({ data });
};

export const postRoleAnswerController = async (req, res) => {
  const { id: userId } = req.user;
  const { roleOptionsIds } = req.body;

  const data = await upsertRoleAnswer({ userId, roleOptionsIds });

  res.status(201).json({ data });
};
export const postJobAnswerController = async (req, res) => {
  const { id: userId } = req.user;
  const { jobOptionId } = req.body;

  const data = await upsertJobAnswer({ userId, jobOptionId });

  res.status(201).json({ data });
};
export const postEducationAnswerController = async (req, res) => {
  const { id: userId } = req.user;
  const { educationOptionId } = req.body;

  const data = await upsertEducationAnswer({ userId, educationOptionId });

  res.status(201).json({ data });
};
