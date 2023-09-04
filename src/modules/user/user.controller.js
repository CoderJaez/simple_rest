import mongoose from "mongoose";
import { User } from "./user.model.js";

export const controller = {
  Get: async (req, res) => {
    const query = req.query;
    const id = req.params.id;
    const result = await User.find();
    if (!result) return res.status(500).json({ message: "Server error" });

    return res.status(200).json(result);
  },
  Post: async (req, res) => {
    const data = req.body;
    try {
      let user = new User(data); //{email: data.email}
      user = await user.save();
      if (!user) return res.status(500).json({ message: "failed" });
      return res.status(200).json({ message: "Success", data: user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  },
  Put: async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    const result = await User.updateOne({ _id: id }, data);
    if (!result) return res.status(500).json({ message: "Error saving user" });

    return res.status(200).json({ message: "Successfully updated" });
  },
  Delete: async (req, res) => {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    if (!result)
      return res.status(500).json({ message: "Error deleting user" });

    return res.status(200).json({ message: "Successfully deleted a user" });
  },
};
