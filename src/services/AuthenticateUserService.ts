import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
interface IAuthenticateRequest {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    if (!email) {
      throw new Error("Email obrigatorio");
    }
    if (!password) {
      throw new Error("Password obrigatorio");
    }
    const usersRepositories = getCustomRepository(UsersRepositories);
    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email,
    });
    if (!user) {
      throw new Error("Email não encontrado");
    }
    const passwordHash = await hash(password, 8); //
    //123456 / 783645734-sdhfhsdf7762374234234
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }
    // Gerar token
    const token = sign(
      {
        email: user.email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}
export { AuthenticateUserService };
