import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { hash } from "bcryptjs";

interface ICategoryRequest {
  id: string;
  name: string;
  descricao: string;
}

class UpdateCategoryService {
  async execute({ id, name, descricao }: ICategoryRequest) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!descricao) {
      throw new Error("Descricao Obrigatorio");
    }

    const categoryRepository = getCustomRepository(CategoryRepositories);

    const categoryAlreadyExists = await categoryRepository.findOne({
      id,
    });

    if (!categoryAlreadyExists) {
      throw new Error("Category not exists");
    }

    categoryAlreadyExists.name = name;
    categoryAlreadyExists.descricao = descricao;
    categoryAlreadyExists.updated_at = new Date();

    return await categoryRepository.update(id, categoryAlreadyExists).then(
      (f) => {
        return categoryAlreadyExists;
      },
      (err) => {
        throw new Error("Erro na atualização");
      }
    );
  }
}

export { UpdateCategoryService };
