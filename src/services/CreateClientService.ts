import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../repositories/ClientsRepositories";
interface IClientRequest {
  name: string;
  telefone: string;
  email: string;
  password: string;
  cpf: string;
  endereco: string;
  cidade: string;
  estado: string;
  bairro: string;
}

class CreateClientService {
  async execute({
    name,
    telefone,
    email,
    password,
    cpf,
    endereco,
    cidade,
    estado,
    bairro,
  }: IClientRequest) {
    const clientsRepository = getCustomRepository(ClientsRepositories);
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!cpf) {
      throw new Error("CPF obrigatorio");
    }
    if (!password) {
      throw new Error("Senha Obrigatoria");
    }

    const ClientAlreadyExists = await clientsRepository.findOne({
      name,
    });
    if (ClientAlreadyExists) {
      throw new Error("Client already exists");
    }
    const client = clientsRepository.create({
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
    await clientsRepository.save(client);
    return client;
  }
}
export { CreateClientService };
