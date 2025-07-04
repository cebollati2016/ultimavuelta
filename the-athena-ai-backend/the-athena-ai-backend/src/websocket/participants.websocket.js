import { getCourse } from "../db/course.db.js";
import { getRoomData, setRoomData } from "../redis/room.redis.js";

const getParticipants = async (courseId) => {
  const data = await getRoomData(`${courseId}-participants`);
  return data?.participants;
};

const setParticipants = async (courseId, participants) => {
  await setRoomData(`${courseId}-participants`, { participants });
};
export const joinParticipantsHandler = async (socket, courseId) => {
  const user = socket.user;
  const { id: userId } = user;

  let participants = await getParticipants(courseId);

  if (!participants) {
    participants = {};
  }

  if (!participants[userId]) {
    participants[userId] = user;
  }

  if (!participants[userId].joined) {
    participants[userId].joined = 0;
  }

  participants[userId].joined++;

  socket.courseId = courseId;
  await setParticipants(courseId, participants);

  socket.emit("set-participants", participants);
  socket.to(courseId).emit("set-participants", participants);

  console.log("part", participants);
};

export const disconnectParticipantsHandler = async (socket) => {
  const user = socket.user;
  const courseId = socket.courseId;

  const { id: userId } = user;

  let participants = await getParticipants(courseId);

  if (participants) {
    participants[userId].joined--;

    if (participants[userId].joined <= 0) {
      delete participants[userId];
    }
  }

  await setParticipants(courseId, participants);

  socket.emit("set-participants", participants);
  socket.to(courseId).emit("set-participants", participants);

  console.log("part", participants);
};
