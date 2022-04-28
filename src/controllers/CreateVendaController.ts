import { Request, Response } from "express";
import { CreateVendaService } from "../services/CreateVendaService";

class CreateVendaController {
  async handle(request: Request, response: Response) {
    const { quantidade, totalBruto, desconto, valorTotal } = request.body;

    const createVendaService = new CreateVendaService();

    const venda = await createVendaService.execute({
      quantidade,
      totalBruto,
      desconto,
      valorTotal,
    });

    return response.json(venda);
  }
}

export { CreateVendaController };
