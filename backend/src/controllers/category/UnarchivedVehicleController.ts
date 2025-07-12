import { Request, Response } from "express";
import { UnarchivedVehicleService } from "../../services/category/UnarchivedVehicleService";

class UnarchiveVehicleController {
  async handle(req: Request, res: Response) {
    const { vehicle_id } = req.body;

    const unarchiveVehicle = new UnarchivedVehicleService();

    try {
      const vehicle = await unarchiveVehicle.execute({ vehicle_id });
      return res.json(vehicle);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UnarchiveVehicleController };
