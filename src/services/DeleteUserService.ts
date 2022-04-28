import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
interface IUserDelete {
  id: string;
}
class DeleteUserService {
  async execute({ id }: IUserDelete) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      id,
    });
    if (!userAlreadyExists) {
      throw new Error("Usuario não existe");
    }
    return await usersRepository.delete(id).then(
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
export { DeleteUserService };
