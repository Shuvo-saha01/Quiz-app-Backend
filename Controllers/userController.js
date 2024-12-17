import User from "../Models/userLoginModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


// Used to register the user to the mongodb database
// POST /api/user/register
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const usernameExists = await User.findOne({ username: username });

    if (usernameExists) {
      return res.status(409).json({ message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Used to get all users
// GET /api/user/allUser

export const userData = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ userData: data });
  } catch (error) {
    res.status(500).json({ message: "interal server error" });
  }
};

//Used to login users
// POST /api/user/login

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  try {
    const samePass = await bcrypt.compare(password, user.password);
    console.log(samePass);
    if (samePass) {
      const payload = { name: username };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ message: "user logged in successfully", token: token });
    } else {
      console.log("Request body:", req.body);
      return res.status(400).json({ message: "wrong password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
