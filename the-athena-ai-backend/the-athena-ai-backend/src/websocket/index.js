import { configWebSocket } from "./../configs/websocket.config.js";

import { auth } from "./auth.websocket.js";
import {
  addEmptyTextHandler,
  addExerciseAtHandler,
  addKeypointsHandler,
  deleteContentAtHandler,
  elaborateMoreAtHandler,
  joinContentHandler,
  setContentAtHandler,
} from "./content.websocket.js";
import {
  disconnectParticipantsHandler,
  joinParticipantsHandler,
} from "./participants.websocket.js";
import {
  addSectionHandler,
  changeTitleSectionHandler,
  deleteSectionHandler,
  joinSectionsHandler,
  setSectionHandler,
} from "./section.websocket.js";

export const initWebSocket = (server) => {
  const io = configWebSocket(server);

  io.use(auth);

  io.on("connection", (socket) => {
    socket.on("join-participants", (...params) =>
      joinParticipantsHandler(socket, ...params)
    );

    // Sections

    socket.on("join-sections", (...params) =>
      joinSectionsHandler(socket, ...params)
    );

    socket.on("set-sections", (...params) =>
      setSectionHandler(socket, ...params)
    );

    socket.on("add-section", (...params) =>
      addSectionHandler(socket, ...params)
    );

    socket.on("change-title-section", (...params) =>
      changeTitleSectionHandler(socket, ...params)
    );

    socket.on("delete-section", (...params) =>
      deleteSectionHandler(socket, ...params)
    );

    // Content

    socket.on("join-content", (...params) => {
      joinContentHandler(socket, ...params);
    });

    socket.on("add-empty-text", (...params) => {
      addEmptyTextHandler(socket, ...params);
    });

    socket.on("set-content-at", (...params) => {
      setContentAtHandler(socket, ...params);
    });

    socket.on("add-exercise-at", (...params) => {
      addExerciseAtHandler(socket, ...params);
    });

    socket.on("add-keypoints", (...params) => {
      addKeypointsHandler(socket, ...params);
    });

    socket.on("elaborate-more-at", (...params) => {
      elaborateMoreAtHandler(socket, ...params);
    });

    socket.on("delete-content-at", (...params) => {
      deleteContentAtHandler(socket, ...params);
    });

    // socket.on("mouse", (...params) => mouseHandler(socket, ...params));

    socket.on("disconnect", (...params) =>
      // disconnectHandler(socket, ...params)
      disconnectParticipantsHandler(socket, ...params)
    );
  });
};
