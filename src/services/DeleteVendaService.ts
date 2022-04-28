import { getCustomRepository } from "typeorm";
import { VendasRepositories } from "../repositories/VendasRepositories";
interface IVendaDelete {
  id: string;
}
class DeleteVendaService {
  async execute({ id }: IVendaDelete) {
    const vendasRepository = getCustomRepository(VendasRepositories);
    const vendaAlreadyExists = await vendasRepository.findOne({
      id,
    });
    if (!vendaAlreadyExists) {
      throw new Error("Venda não existe");
    }
    return await vendasRepository.delete(id).then(
      (f) => {
        var messagmsgeDelete = {
          message: "Registro excluido com sucesso",
        };
        return messagmsgeDelete;
      },
      (err) => {
        throw new Error("Erro na exclusão");
      }
    );
  }
}
export { DeleteVendaService };
