import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, descricao, preco, id_categoria } = request.body; //id_categoria ???

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      descricao,
      preco,
      id_categoria,
    });

    return response.json(product);
  }
}

export { CreateProductController };
