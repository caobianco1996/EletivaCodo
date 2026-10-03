import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!authToken || !secret) {
    return response.status(401).end();
  }

  const [scheme, token] = authToken.split(" ");
  if (scheme !== "Bearer" || !token) {
    return response.status(401).end();
  }

  try {
    verify(token, secret) as IPayload;
    return next();
  } catch {
    return response.status(401).end();
  }
}
