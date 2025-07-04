import { getRoomData, setRoomData } from "../redis/room.redis.js";

export const joinMouseHandler = async () => {
  socket.mouseId = getId();
};

export const mouseHandler = async (socket, courseId, mouse) => {
  const roomData = await getRoomData(courseId);

  if (!roomData) return;

  const mouseId = socket.mouseId;

  const { participants, data } = await getRoomData(courseId);
  const { mouses } = data;

  mouses[mouseId] = mouse;

  await setRoomData(courseId, participants, data);

  socket.emit("mouseId", socket.mouseId);
  socket.to(courseId).emit("mouse", mouses);
};
