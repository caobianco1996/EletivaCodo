import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../repositories/ClientsRepositories";
import { classToPlain } from "class-transformer";

class ListClientService {
  async execute() {
    const clientRepositories = getCustomRepository(ClientsRepositories);
    const client = await clientRepositories.find();
    return classToPlain(client);
  }
}
export { ListClientService };
