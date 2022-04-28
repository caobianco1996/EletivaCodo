import { Request, Response } from "express";
import { UpdateVendaService } from "../services/UpdateVendaService";

class UpdateVendaController {
  async handle(request: Request, response: Response) {
    const { id, quantidade, totalBruto, desconto, valorTotal } = request.body;

    const updateVendaService = new UpdateVendaService();

    const venda = await updateVendaService.execute({
      id,
      quantidade,
      totalBruto,
      desconto,
      valorTotal,
    });

    return response.json(venda);
  }
}

export { UpdateVendaController };
