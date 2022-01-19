import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategory } from "../services/CreateCategoryService";
const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategory(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send({
    success: true,
  });
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.list();

  return res.json({
    categories: categories,
  });
});

export { categoriesRoutes };
