import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../repositories/ClientsRepositories";
interface IClientDelete {
  id: string;
}
class DeleteClientService {
  async execute({ id }: IClientDelete) {
    const clientsRepository = getCustomRepository(ClientsRepositories);
    const clientAlreadyExists = await clientsRepository.findOne({
      id,
    });
    if (!clientAlreadyExists) {
      throw new Error("Cliente não existe");
    }
    return await clientsRepository.delete(id).then(
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
export { DeleteClientService };
