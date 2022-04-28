import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
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

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
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

export { CreateClientController };
