import express from "express";
import expressAsyncHandler from "express-async-handler";
import { User } from "../model/userModel.js";

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, password, email, id } = req.body;

  const checkUser = await User.findOne({ email });
  if (checkUser) {
    return res.status(409).json({ message: "User Already Exists!" });
  }

  const createUser = await User.create({
    name,
    password,
    email,
    id,
  });

  if (createUser) {
    return res.status(201).json({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      id: createUser.id,
    });
  }
  res.status(400).json({ message: "Invalid User Registration" });
});

const LoginUser = expressAsyncHandler(async (req, res) => {
  const { id, email, phoneNumber, password } = req.body;

  const user = await User.findOne({ id });

  console.log(user);

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    return res.status(200).json({
      message: "Successfully Logged In",
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  res.status(401).json({ message: "Invalid User credentials!" });
});
const logout = expressAsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "Log Out Successfully!",
  });
});
export { LoginUser, registerUser };
