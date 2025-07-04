import { getId } from "../utils/id.util.js";

import { getRoomData, setRoomData } from "../redis/room.redis.js";

import {
  addSection,
  changeTitleSection,
  deleteSection,
} from "../services/section.service.js";

export const getSections = async (courseId) => {
  const data = await getRoomData(`${courseId}-sections`);
  return data?.sections;
};

const setSections = async (courseId, sections) => {
  await setRoomData(`${courseId}-sections`, { sections });
};

export const joinSectionsHandler = async (socket, courseId) => {
  let sections = await getSections(courseId);

  if (!sections) {
    sections = [];
  }

  await setSections(courseId, sections);

  socket.join(courseId);
  socket.emit("set-sections", sections);
};

export const setSectionHandler = async (socket, courseId, sections) => {
  await setSections(courseId, sections);

  socket.emit("set-sections", sections);
  socket.to(courseId).emit("set-sections", sections);
};

export const addSectionHandler = async (socket, courseId, path) => {
  let sections = await getSections(courseId);

  const id = getId();
  sections = addSection(sections, path, id);

  await setSections(courseId, sections);

  socket.emit("add-section", path, id);
  socket.to(courseId).emit("add-section", path, id);
};

export const changeTitleSectionHandler = async (
  socket,
  courseId,
  path,
  newTitle
) => {
  let sections = await getSections(courseId);

  sections = changeTitleSection(sections, path, newTitle);
  await setSections(courseId, sections);

  socket.emit("change-title-section", path, newTitle);
  socket.to(courseId).emit("change-title-section", path, newTitle);
};

export const deleteSectionHandler = async (socket, courseId, path) => {
  let sections = await getSections(courseId);

  sections = deleteSection(sections, path);

  await setSections(courseId, sections);

  socket.emit("delete-section", path);
  socket.to(courseId).emit("delete-section", path);
};
