import { Router } from "express";
import { v4 as uuid } from "uuid";
import { Category } from "../models/Category";
const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category: Category = {
    id: uuid(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return res.status(201).send();
});

export { categoriesRoutes };
