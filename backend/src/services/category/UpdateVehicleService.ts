import prismaClient from "../../prisma";

interface UpdateVehicleRequest {
  vehicle_id: string;
  name?: string;
  placa?: string;
}

class UpdateVehicleService {
  async execute({ vehicle_id, name, placa }: UpdateVehicleRequest) {
    const vehicle = await prismaClient.vehicle.findUnique({
      where: { id: vehicle_id },
    });

    if (!vehicle) {
      throw new Error("Veículo não encontrado.");
    }

    const updatedVehicle = await prismaClient.vehicle.update({
      where: { id: vehicle_id },
      data: {
        name: name ?? vehicle.name, // Mantém o valor atual se não for enviado
        placa: placa ?? vehicle.placa,
      },
    });

    return updatedVehicle;
  }
}

export { UpdateVehicleService };
