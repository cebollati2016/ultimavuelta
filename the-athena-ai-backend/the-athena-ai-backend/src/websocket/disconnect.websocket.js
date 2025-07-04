import {
  deleteRoomData,
  getRoomData,
  setRoomData,
} from "../redis/room.redis.js";

export const disconnectHandler = async (socket) => {
  const userId = socket.user.id;
  const courseId = socket.courseId;
  const mouseId = socket.mouseId;

  if (!courseId) return;

  const roomData = await getRoomData(courseId);
  if (!roomData) return;

  const { participants, data } = roomData;
  delete data.mouses[mouseId];

  if (participants[userId]) {
    participants[userId].joined--;

    if (participants[userId].joined === 0) {
      delete participants[userId];
    }

    if (Object.keys(participants).length === 0) {
      // await deleteRoomData(courseId);
    } else {
      await setRoomData(courseId, participants, data);
    }

    socket.to(courseId).emit("participants", participants);
  }
};
