import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { VendasRepositories } from "../repositories/VendasRepositories";
interface IVendaRequest {
  quantidade: string;
  totalBruto: string;
  desconto: string;
  valorTotal: string;
}
class CreateVendaService {
  async execute({
    quantidade,
    totalBruto,
    desconto,
    valorTotal,
  }: IVendaRequest) {
    const vendasRepository = getCustomRepository(VendasRepositories);
    if (!quantidade) {
      throw new Error("quantidade obrigatorio");
    }
    if (!totalBruto) {
      throw new Error("totalBruto obrigatorio");
    }
    if (!desconto) {
      throw new Error("desconto Obrigatorio");
    }
    if (!valorTotal) {
      throw new Error("Valor total Obrigatorio");
    }
    const vendaAlreadyExists = await vendasRepository.findOne({
      quantidade,
    });
    if (vendaAlreadyExists) {
      throw new Error("User already exists");
    }

    const venda = vendasRepository.create({
      quantidade,
      totalBruto,
      desconto,
      valorTotal,
    });
    await vendasRepository.save(venda);
    return venda;
  }
}
export { CreateVendaService };
