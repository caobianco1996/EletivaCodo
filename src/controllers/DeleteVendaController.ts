import { Request, Response } from "express";
import { DeleteVendaService } from "../services/DeleteVendaService";

class DeleteVendaController {
  async handle(request: Request, response: Response) {
    const deleteVendaService = new DeleteVendaService();
    const id = request.params.id;
    const users = await deleteVendaService.execute({ id });

    return response.json(users);
  }
}

export { DeleteVendaController };
