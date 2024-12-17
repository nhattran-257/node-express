import User from "../models/user.model";

export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

export const getUsers = async () => {
  return await User.findAll();
};
