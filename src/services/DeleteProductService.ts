import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
interface IProductDelete {
  id: string;
}
class DeleteProductService {
  async execute({ id }: IProductDelete) {
    const productsRepository = getCustomRepository(ProductsRepositories);
    const productAlreadyExists = await productsRepository.findOne({
      id,
    });
    if (!productAlreadyExists) {
      throw new Error("produto não existe");
    }
    return await productsRepository.delete(id).then(
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
export { DeleteProductService };
