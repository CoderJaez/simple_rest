import { User } from "../user/user.model.js";

const AuthController = {
  login: async (req, res) => {
    try {
      const data = req.body;
      const user = await User.findOne({ email: data.email });
      if (!user)
        return res.status(401).json({ message: "Invalid email/password" });
      if (!user.comparePassword(data.password))
        return res.status(401).json({ message: "Invalid email/password" });

      return res.status(200).json({ message: "Successfully logged in" });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json({ message: "Error authentication." });
    }
  },
};

export default AuthController;
