import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string; //id do usuário
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Receber o token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end(); //Não autorizado
  }

  const [, token] = authToken.split(" "); //Reservando o token

  try {
    //Validar o token
    const { sub } = verify(token, process.env.SECRET_JWT) as Payload;

    // Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
    req.user_id = sub; //Foi adicionado no express atraves do @types
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
