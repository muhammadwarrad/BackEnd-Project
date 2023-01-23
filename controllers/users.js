// Import users model
import Users from "../models/Users.js";

// Exports all users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Export certain user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Creates user
export const createUser = async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Updates user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndUpdate(id, req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Deletes user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Users.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted!");
    }
    throw new Error("User not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

