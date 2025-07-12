import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos");
    }

    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("Formato de e-mail inválido");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email já cadastrado!");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash, //A senha criptografada
      },
      select: {
        name: true,
        id: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
