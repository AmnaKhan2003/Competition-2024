import express from "express";
import { registerUser, LoginUser } from "../controller/userController.js";
const router = express.Router();

// Backend Express Route
router.post("/api/user/register", async (req, res) => {
  const { idNumber, email, password } = req.body;

  try {
    // Check if the user already exists
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      idNumber,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      _id: newUser._id,
      email: newUser.email,
      idNumber: newUser.idNumber,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
    console.error(error);
  }
});

export default router;
