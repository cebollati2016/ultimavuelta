import { redis } from "../configs/redis.config.js";

export const getRoomData = async (id) => {
  return JSON.parse(await redis.get(id));
};

export const setRoomData = async (id, data) => {
  await redis.set(id, JSON.stringify(data));
};

export const deleteRoomData = async (id) => {
  await redis.del(id);
};
