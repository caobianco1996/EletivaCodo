import { Request, Response } from "express";
import { ListClientService } from "../services/ListClientService";

class ListClientsController {
  async handle(request: Request, response: Response) {
    const listClientsService = new ListClientService();

    const clients = await listClientsService.execute();

    return response.json(clients);
  }
}

export { ListClientsController };
