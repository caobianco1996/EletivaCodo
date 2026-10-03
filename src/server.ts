import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";

import { router } from "./routes";

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_request, response) => {
  return response.status(200).json({ status: "ok" });
});

app.use(router);

app.use(
  (
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    const candidate = error as { statusCode?: unknown; message?: unknown };
    const requestedStatus = Number(candidate?.statusCode);
    const statusCode =
      Number.isInteger(requestedStatus) && requestedStatus >= 400 && requestedStatus < 500
        ? requestedStatus
        : 500;

    if (statusCode === 500) {
      console.error(error);
    }

    return response.status(statusCode).json({
      status: "error",
      message:
        statusCode < 500 && typeof candidate?.message === "string"
          ? candidate.message
          : "Internal Server Error",
    });
  }
);

const configuredPort = Number(process.env.PORT);
const port = Number.isInteger(configuredPort) && configuredPort > 0 ? configuredPort : 3000;

app.listen(port, () => {
  console.log(`Codo Eletiva API listening on port ${port}`);
});
