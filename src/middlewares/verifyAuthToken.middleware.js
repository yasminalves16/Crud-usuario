import { response } from "express";
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  const token = bearerToken.split(" ")[1];

  jwt.verify(token, "sdfDFG!@#%ASDFAS", (error, decoded) => {
    if (error) {
      return response.status(404).json({
        message: "Invalid Token.",
      });
    }

    req.user = { id: decoded.sub, isAdm: decoded.isAdm, email: decoded.email };
  });

  next();
};

export default verifyAuthTokenMiddleware;
