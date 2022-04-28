import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, descricao } = request.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      name,
      descricao,
    });

    return response.json(category);
  }
}

export { CreateCategoryController };
