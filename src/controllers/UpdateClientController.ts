import { Request, Response } from "express";
import { UpdateClientService } from "../services/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const {
      id,
      name,
      telefone,
      email,
      password,
      cpf,
      endereco,
      cidade,
      estado,
      bairro,
    } = request.body;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute({
      id,
      name,
      telefone,
      email,
      password,
      cpf,
      endereco,
      cidade,
      estado,
      bairro,
    });

    return response.json(client);
  }
}

export { UpdateClientController };
