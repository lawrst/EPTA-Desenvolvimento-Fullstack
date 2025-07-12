import prismaClient from "../../prisma";

interface UnarchiveVehicle {
  vehicle_id: string;
}

class UnarchivedVehicleService {
  async execute({ vehicle_id }: UnarchiveVehicle) {
    const vehicle = await prismaClient.vehicle.findUnique({
      where: { id: vehicle_id },
    });

    if (!vehicle) {
      throw new Error("Veículo não encontrado.");
    }

    if (!vehicle.isArchived) {
      throw new Error("Este veículo não está arquivado");
    }

    const updatedVehicle = await prismaClient.vehicle.update({
      where: {
        id: vehicle_id,
      },
      data: {
        isArchived: false,
      },
    });

    return updatedVehicle;
  }
}

export { UnarchivedVehicleService };
