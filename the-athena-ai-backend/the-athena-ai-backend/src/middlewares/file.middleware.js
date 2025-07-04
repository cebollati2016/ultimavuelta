import multer from "multer";
import { getId } from "../utils/id.util.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}-${getId()}`);
  },
});

export const upload = multer({ storage });
