import { getCustomRepository } from "typeorm";
import { VendasRepositories } from "../repositories/VendasRepositories";
import { classToPlain } from "class-transformer";

class ListVendaService {
  async execute() {
    const vendasRepositories = getCustomRepository(VendasRepositories);
    const vendas = await vendasRepositories.find();
    return classToPlain(vendas);
  }
}
export { ListVendaService };
