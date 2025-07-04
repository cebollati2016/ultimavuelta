import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const encode = (data) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });
};

const decode = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export { encode, decode };
