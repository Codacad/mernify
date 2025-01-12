import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(404).send({ message: "Access Denied" });
  }
  try {
    const decodedUser = jwt.verify(token, process.env.SECRET_JSONWT);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(404).send({ message: "Invalid Token" });
  }
};
