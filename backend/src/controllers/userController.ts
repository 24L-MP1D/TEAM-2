import { UserModel } from "../models/user";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById({ _id: id });
    res.send(user);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};

// getUser

const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await UserModel.create({
      name,
    });
    res.send(user);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, {
      name,
    });
    res.send(user);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.deleteOne({ _id: id });
    res.send({ message: "successfully deleted" });
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};
export { getUsers, createUser, updateUser, deleteUser, getUser };
