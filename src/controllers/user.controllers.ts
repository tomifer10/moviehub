import { Request, Response } from "express";

export const getAllUser = (req: Request, res: Response) => {
  res.send("Hola desde controller");
};

export const createUser = (req: Request, res: Response) => {
  res.send("User created");
};

export const updateUser = (req: Request, res: Response) => {
  res.send("User updated");
};

export const deleteUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  res.send(`User with id ${userId} has been deleted`);
};
