import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id, name, descricao } = request.body;

    const updateCategoryService = new UpdateCategoryService();

    const category = await updateCategoryService.execute({
      id,
      name,
      descricao,
    });

    return response.json(category);
  }
}

export { UpdateCategoryController };
