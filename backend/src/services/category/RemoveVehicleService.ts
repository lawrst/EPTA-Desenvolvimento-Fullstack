import prismaClient from "../../prisma";

interface VehicleRequest {
  vehicle_id: string;
}

class RemoveVehicleService {
  async execute({ vehicle_id }: VehicleRequest) {
    const deleteVehicle = await prismaClient.vehicle.delete({
      where: {
        id: vehicle_id,
      },
    });

    return deleteVehicle;
  }
}

export { RemoveVehicleService };
