import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ITokenPayload {
  sub: string;
}

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authorization = request.headers.authorization;
  const secret = process.env.JWT_SECRET;
  if (!authorization || !secret) return response.status(401).json({ error: "Não autenticado" });

  const [scheme, token] = authorization.split(" ");
  if (scheme !== "Bearer" || !token) return response.status(401).json({ error: "Não autenticado" });

  try {
    const payload = verify(token, secret) as ITokenPayload;
    if (!payload.sub) return response.status(401).json({ error: "Não autenticado" });

    const users = getCustomRepository(UsersRepositories);
    const user = await users.findOne(payload.sub);
    if (!user) return response.status(401).json({ error: "Não autenticado" });
    if (!user.admin) return response.status(403).json({ error: "Acesso restrito a administradores" });

    return next();
  } catch {
    return response.status(401).json({ error: "Não autenticado" });
  }
}
