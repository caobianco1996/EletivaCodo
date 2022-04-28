import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { hash } from "bcryptjs";

interface IProductRequest {
  id: string;
  name: string;
  descricao: string;
  preco: string;
  id_categoria: string;
}

class UpdateProductService {
  async execute({ id, name, descricao, preco, id_categoria }: IProductRequest) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!descricao) {
      throw new Error("Descricao Obrigatorio");
    }
    if (!preco) {
      throw new Error("preco Obrigatorio");
    }

    if (!id_categoria) {
      throw new Error("Categoria Obrigatorio");
    }
    const productRepository = getCustomRepository(ProductsRepositories);

    const productAlreadyExists = await productRepository.findOne({
      id,
    });

    if (!productAlreadyExists) {
      throw new Error("Category not exists");
    }

    productAlreadyExists.name = name;
    productAlreadyExists.descricao = descricao;
    productAlreadyExists.updated_at = new Date();

    return await productRepository.update(id, productAlreadyExists).then(
      (f) => {
        return productAlreadyExists;
      },
      (err) => {
        throw new Error("Erro na atualização");
      }
    );
  }
}

export { UpdateProductService };
