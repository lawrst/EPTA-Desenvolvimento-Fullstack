import prismaClient from "../../prisma";

interface ArchiveVehicle {
  vehicle_id: string;
}

class ArchiveVehicleService {
  async execute({ vehicle_id }: ArchiveVehicle) {
    const vehicle = await prismaClient.vehicle.findUnique({
      where: { id: vehicle_id },
    });

    if (!vehicle) {
      throw new Error("Veículo não encontrado.");
    }

    if (vehicle.isArchived) {
      throw new Error("Este veículo já está arquivado.");
    }

    const updatedVehicle = await prismaClient.vehicle.update({
      where: {
        id: vehicle_id,
      },
      data: {
        isArchived: true,
      },
    });

    return updatedVehicle;
  }
}

export { ArchiveVehicleService };
