import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail) throw new Error("Email obrigatório");
    if (!name?.trim()) throw new Error("Nome obrigatório");
    if (!password || password.length < 8) {
      throw new Error("A senha deve ter pelo menos 8 caracteres");
    }

    const userAlreadyExists = await usersRepository.findOne({ email: normalizedEmail });
    if (userAlreadyExists) throw new Error("Usuário já existe");

    const passwordHash = await hash(password, 12);
    const user = usersRepository.create({
      name: name.trim(),
      email: normalizedEmail,
      admin: false,
      password: passwordHash,
    });
    await usersRepository.save(user);

    return { id: user.id, name: user.name, email: user.email };
  }
}

export { CreateUserService };
