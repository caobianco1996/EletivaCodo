import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
interface ICategoryDelete {
  id: string;
}
class DeleteCategoryService {
  async execute({ id }: ICategoryDelete) {
    const categoryRepository = getCustomRepository(CategoryRepositories);
    const categoryAlreadyExists = await categoryRepository.findOne({
      id,
    });
    if (!categoryAlreadyExists) {
      throw new Error("Categoria não existe");
    }
    return await categoryRepository.delete(id).then(
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
export { DeleteCategoryService };
