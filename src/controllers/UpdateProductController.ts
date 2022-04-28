import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, descricao, preco, id_categoria } = request.body;

    const updateproductService = new UpdateProductService();

    const product = await updateproductService.execute({
      id,
      name,
      descricao,
      preco,
      id_categoria,
    });

    return response.json(product);
  }
}

export { UpdateProductController };
