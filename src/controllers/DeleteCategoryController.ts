import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const deleteCategoryService = new DeleteCategoryService();
    const id = request.params.id;
    const category = await deleteCategoryService.execute({ id });

    return response.json(category);
  }
}

export { DeleteCategoryController };
