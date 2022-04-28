import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  id: string;
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class UpdateUserService {
  async execute({ id, name, email, admin = false, password }: IUserRequest) {
    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!name) {
      throw new Error("Nome obrigatorio");
    }
    if (!password) {
      throw new Error("Password Obrigatorio");
    }
    if (!email) {
      throw new Error("email Obrigatorio");
    }
    const usersRepository = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepository.findOne({
      id,
    });

    if (!userAlreadyExists) {
      throw new Error("User not exists");
    }

    const passwordHash = await hash(password, 8);
    userAlreadyExists.name = name;
    userAlreadyExists.admin = admin;
    userAlreadyExists.email = email;
    userAlreadyExists.updated_at = new Date();
    userAlreadyExists.password = passwordHash;

    return await usersRepository.update(id, userAlreadyExists).then(
      (f) => {
        return userAlreadyExists;
      },
      (err) => {
        throw new Error("Erro na atualização");
      }
    );
  }
}

export { UpdateUserService };
