import { Request, Response } from "express";
import { ArchiveVehicleService } from "../../services/category/ArchiveVehicleService";

class ArchiveVehicleController {
  async handle(req: Request, res: Response) {
    const { vehicle_id } = req.body;

    const archiveVehicle = new ArchiveVehicleService();

    const vehicle = await archiveVehicle.execute({
      vehicle_id,
    });

    return res.json(vehicle);
  }
}

export { ArchiveVehicleController };
