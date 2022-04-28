import { EntityRepository, Repository } from "typeorm";
import { Venda } from "../entities/Venda";
@EntityRepository(Venda)
class VendasRepositories extends Repository<Venda> {}
export { VendasRepositories };
