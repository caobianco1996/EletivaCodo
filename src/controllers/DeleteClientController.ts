import { Request, Response } from "express";
import { DeleteClientService } from "../services/DeleteClientService";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    const deleteClientService = new DeleteClientService();
    const id = request.params.id;
    const users = await deleteClientService.execute({ id });

    return response.json(users);
  }
}

export { DeleteClientController };
