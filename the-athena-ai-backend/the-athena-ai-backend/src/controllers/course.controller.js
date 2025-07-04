import {
  getTags,
  postCourse,
  upsertCourseDetails,
  getCourseDetails,
  delCourse,
} from "../db/course.db.js";

export const postCourseController = async (req, res) => {
  const { id: userId, languageId } = req.user;

  const data = await postCourse({ userId });

  res.json({ data });
};

export const delCourseController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const { courseId } = req.params;

  const data = await delCourse({ userId, courseId });

  res.json({ data });
};

export const getCourseDetailsController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  let { courseId } = req.params;

  const data = await getCourseDetails({
    courseId,
    userId,
    languageId,
  });

  console.log(data);

  res.json({ data });
};

export const postCourseDetailsController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  let { courseId, title, description, tagsIds } = req.body;

  const data = await upsertCourseDetails({
    courseId,
    userId,
    languageId,
    title,
    description,
    tagsIds,
  });

  res.json({ data });
};

export const getTagsController = async (req, res) => {
  const { languageId } = req.user;
  let { contains } = req.query;

  const pageSize = 5;

  const data = await getTags({ languageId, pageSize, contains });

  res.json({ data });
};
