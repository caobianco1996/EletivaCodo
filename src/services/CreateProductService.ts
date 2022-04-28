import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
interface IProductRequest {
  name: string;
  descricao: string;
  preco: string;
  id_categoria: string;
}
class CreateProductService {
  async execute({ name, descricao, preco, id_categoria }: IProductRequest) {
    const productsRepository = getCustomRepository(ProductsRepositories);
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!descricao) {
      throw new Error("Descrição obrigatorio");
    }
    if (!preco) {
      throw new Error("Preço Obrigatorio");
    }
    if (!id_categoria) {
      throw new Error("Categoria Obrigatorio");
    }

    const productAlreadyExists = await productsRepository.findOne({
      name,
    });
    if (productAlreadyExists) {
      throw new Error("User already exists");
    }
    const product = productsRepository.create({
      name,
      descricao,
      preco,
      id_categoria,
    });
    await productsRepository.save(product);
    return product;
  }
}
export { CreateProductService };
