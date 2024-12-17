import { Request, Response } from "express";
import { createUser, getUsers } from "../../domain/services/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User creation failed" });
  }
};
