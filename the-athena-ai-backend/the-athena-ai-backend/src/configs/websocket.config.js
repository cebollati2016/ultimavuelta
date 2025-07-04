import { Server } from "socket.io";

const URL_FRONTEND = process.env.URL_FRONTEND;

const configWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: URL_FRONTEND,
      credentials: true,
    },
  });

  return io;
};

export { configWebSocket };
