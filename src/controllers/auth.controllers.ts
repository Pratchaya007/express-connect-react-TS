import type { RequestHandler } from "express";

const reqister: RequestHandler  = (req,res) => {
  res.status(201).json({message: 'register successfuly'})
}

export const authController = {reqister}