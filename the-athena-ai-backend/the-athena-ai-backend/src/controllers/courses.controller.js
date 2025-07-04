import { getCourses, getCoursesByUser } from "../db/course.db.js";

export const getCoursesController = async (req, res) => {
  const { id: userId, languageId } = req.user;
  const { mine, contains } = req.query;
  const mineBool = mine == "true";

  let data;
  if (mineBool) {
    console.log("mine true");
    data = await getCoursesByUser({ userId });
  } else {
    console.log("mine false");
    data = await getCourses({ userId, contains });
    console.log(data);
  }

  res.json({ data });
};
