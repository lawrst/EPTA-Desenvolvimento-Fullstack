import { Response, Request } from "express";
import { RemoveVehicleService } from "../../services/category/RemoveVehicleService";

class RemoveVehicleController {
  async handle(req: Request, res: Response) {
    const vehicle_id = req.query.vehicle_id as string;

    const removeVehicle = new RemoveVehicleService();

    try {
      const vehicle = await removeVehicle.execute({
        vehicle_id,
      });
      return res.json(vehicle);
    } catch (error: any) {
      const msgPrismaNotFound =
        "An operation failed because it depends on one or more records that were required but not found. No record was found for a delete."; // Erro que aparecia no teste
      if (error.message?.includes(msgPrismaNotFound)) {
        return res.status(400).json({ error: "Erro ao deletar o veículo" });
      }
      return res
        .status(400)
        .json({ error: error.message || "Erro ao deletar o veículo" });
    }
  }
}

export { RemoveVehicleController };
