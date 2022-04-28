import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../repositories/ClientsRepositories";
import { hash } from "bcryptjs";

interface IClientRequest {
  id: string;
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

class UpdateClientService {
  async execute({
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
  }: IClientRequest) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!telefone) {
      throw new Error("telefone obrigatorio");
    }
    if (!email) {
      throw new Error("email obrigatorio");
    }
    if (!password) {
      throw new Error("Password Obrigatorio");
    }
    if (!cpf) {
      throw new Error("CPF obrigatorio");
    }
    if (!endereco) {
      throw new Error("endereco obrigatorio");
    }
    if (!cidade) {
      throw new Error("cidade obrigatorio");
    }
    if (!estado) {
      throw new Error("estado Obrigatorio");
    }
    if (!bairro) {
      throw new Error("bairro Obrigatorio");
    }
    const clientsRepository = getCustomRepository(ClientsRepositories);

    const clientAlreadyExists = await clientsRepository.findOne({
      id,
    });

    if (!clientAlreadyExists) {
      throw new Error("Client not exists");
    }

    const passwordHash = await hash(password, 8);
    clientAlreadyExists.name = name;
    clientAlreadyExists.telefone = telefone;
    clientAlreadyExists.email = email;
    clientAlreadyExists.password = password;
    clientAlreadyExists.cpf = cpf;
    clientAlreadyExists.endereco = endereco;
    clientAlreadyExists.cidade = cidade;
    clientAlreadyExists.estado = estado;
    clientAlreadyExists.bairro = bairro;
    clientAlreadyExists.updated_at = new Date();
    clientAlreadyExists.password = passwordHash;

    return await clientsRepository.update(id, clientAlreadyExists).then(
      (f) => {
        return clientAlreadyExists;
      },
      (err) => {
        throw new Error("Erro na atualização");
      }
    );
  }
}

export { UpdateClientService };
