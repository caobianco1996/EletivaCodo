import { getCustomRepository } from "typeorm";
import { VendasRepositories } from "../repositories/VendasRepositories";
import { hash } from "bcryptjs";

interface IVendaRequest {
  id: string;
  quantidade: string;
  totalBruto: string;
  desconto: string;
  valorTotal: string;
}

class UpdateVendaService {
  async execute({
    id,
    quantidade,
    totalBruto,
    desconto,
    valorTotal,
  }: IVendaRequest) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!quantidade) {
      throw new Error("Quantidade obrigatorio");
    }
    if (!totalBruto) {
      throw new Error("Total Bruto Obrigatorio");
    }
    if (!desconto) {
      throw new Error("Desconto Obrigatorio");
    }
    if (!valorTotal) {
      throw new Error("Valor Total Obrigatorio");
    }

    const vendaRepository = getCustomRepository(VendasRepositories);

    const vendaAlreadyExists = await vendaRepository.findOne({
      id,
    });

    if (!vendaAlreadyExists) {
      throw new Error("Venda not exists");
    }

    vendaAlreadyExists.quantidade = quantidade;
    vendaAlreadyExists.totalBruto = totalBruto;
    vendaAlreadyExists.desconto = desconto;
    vendaAlreadyExists.valorTotal = valorTotal;
    vendaAlreadyExists.updated_at = new Date();

    return await vendaRepository.update(id, vendaAlreadyExists).then(
      (f) => {
        return vendaAlreadyExists;
      },
      (err) => {
        throw new Error("Erro na atualização");
      }
    );
  }
}

export { UpdateVendaService };
