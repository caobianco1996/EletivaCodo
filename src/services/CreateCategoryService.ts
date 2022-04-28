import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
interface IUserRequest {
  name: string;
  descricao: string;
}
class CreateCategoryService {
  async execute({ name, descricao }: IUserRequest) {
    const categoryRepository = getCustomRepository(CategoryRepositories);
    if (!name) {
      throw new Error("Nome obrigatorio"); //Nome da categoria obrigatorio
    }

    const categoryAlreadyExists = await categoryRepository.findOne({
      name,
    });
    if (categoryAlreadyExists) {
      throw new Error("Nome do produto ja existe"); // dois produtos com o mesmo nome
    }

    const category = categoryRepository.create({
      name,
      descricao,
    });
    await categoryRepository.save(category);
    return category;
  }
}
export { CreateCategoryService };
