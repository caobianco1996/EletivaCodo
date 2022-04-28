import { Request, Response } from "express";
import { ListVendaService } from "../services/ListVendaService";

class ListVendasController {
  async handle(request: Request, response: Response) {
    const listVendaService = new ListVendaService();

    const vendas = await listVendaService.execute();

    return response.json(vendas);
  }
}

export { ListVendasController };
