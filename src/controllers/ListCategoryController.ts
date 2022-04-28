import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";

class ListCategorysController {
  async handle(request: Request, response: Response) {
    const listCategorysService = new ListCategoryService();

    const categorys = await listCategorysService.execute();

    return response.json(categorys);
  }
}

export { ListCategorysController };
