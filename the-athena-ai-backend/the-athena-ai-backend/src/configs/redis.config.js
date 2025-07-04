import { createClient } from "redis";

const URL_REDIS = process.env.URL_REDIS;
const PORT_REDIS = Number(process.env.PORT_REDIS);
const PASSWORD_REDIS = process.env.PASSWORD_REDIS;

export const redis = createClient({
  socket: {
    host: URL_REDIS,
    port: PORT_REDIS,
  },
  password: PASSWORD_REDIS,
});

await redis.connect();
