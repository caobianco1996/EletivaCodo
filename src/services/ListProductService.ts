import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { classToPlain } from "class-transformer";

class ListProductService {
  async execute() {
    const productRepositories = getCustomRepository(ProductsRepositories);
    const product = await productRepositories.find();
    return classToPlain(product);
  }
}
export { ListProductService };
