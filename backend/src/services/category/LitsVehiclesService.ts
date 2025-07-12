import prismaClient from "../../prisma";

class ListVehiclesService {
  async execute() {
    const vehicle = await prismaClient.vehicle.findMany({
      where: {
        isArchived: false,
        status: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return vehicle;
  }
}

export { ListVehiclesService };
