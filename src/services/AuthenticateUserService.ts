import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    if (!email?.trim() || !password) throw new Error("Email e senha obrigatórios");

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET não configurado");

    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({ email: email.trim().toLowerCase() });
    if (!user || !(await compare(password, user.password))) {
      throw new Error("Email ou senha incorretos");
    }

    return sign(
      { email: user.email, admin: user.admin },
      secret,
      { subject: user.id, expiresIn: "1d" }
    );
  }
}

export { AuthenticateUserService };
