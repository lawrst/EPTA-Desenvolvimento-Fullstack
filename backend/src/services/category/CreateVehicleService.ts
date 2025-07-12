import prismaClient from "../../prisma";

interface VehicleRequest {
  name: string;
  placa: string;
}

class CreateVehicleService {
  async execute({ name, placa }: VehicleRequest) {
    if (name === "" || placa === "") {
      throw new Error("Nome/Placa inválido");
    }

    if (!name || !placa) {
      throw new Error("O nome e a placa são obrigatórios");
    }

    const existingSign = await prismaClient.vehicle.findFirst({
      where: {
        placa: placa,
      },
    });

    if (existingSign) {
      throw new Error("Já existe um veículo com essa placa");
    }

    const vehicle = await prismaClient.vehicle.create({
      data: {
        name: name,
        placa: placa,
      },
      select: {
        id: true,
        name: true,
        placa: true,
        status: true,
      },
    });

    return vehicle;
  }
}

export { CreateVehicleService };
