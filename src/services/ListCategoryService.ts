import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoryRepositories";
import { classToPlain } from "class-transformer";

class ListCategoryService {
  async execute() {
    const categoryRepositories = getCustomRepository(CategoryRepositories);
    const category = await categoryRepositories.find();
    return classToPlain(category);
  }
}
export { ListCategoryService };
