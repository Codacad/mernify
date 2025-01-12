import User from "../models/user.js";
import bcrypt from "bcrypt";
import { passwordMatch } from "../utils/passwordMatch.js";
import jwt from "jsonwebtoken";

// Fetching the users
const users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// User signup
const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password) {
      return res.status(401).send({ message: "All fields are required" });
    }
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(401).send({
        message: "Please try another email, it is already used with us",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = {
      fullname,
      email,
      password: hashedPassword,
    };
    const userCreationResponse = await User.create(user);
    if (userCreationResponse && userCreationResponse._id) {
      return res.status(201).send({ message: "Signup Successful" });
    } else {
      return res.status(400).send({ message: "Login Failed..." });
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
};

// User signin
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).send({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .send({ message: "Email is not registered, please sign up first" });
    }
    const isPasswordMatch = await passwordMatch(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.fullname, email: user.email },
      process.env.SECRET_JSONWT,
      { expiresIn: "1h" }
    );

    res.cookie("authToken", token, {
      httpOnly: false,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).send({
      message: "Logged in successfully",
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("authToken");
  res.status(200).send({ message: "Logged out successfully" });
};

export { users, signin, signup, logout };
