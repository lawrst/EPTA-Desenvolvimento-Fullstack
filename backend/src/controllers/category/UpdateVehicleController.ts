import { Request, Response } from "express";
import { UpdateVehicleService } from "../../services/category/UpdateVehicleService";

class UpdateVehicleController {
  async handle(req: Request, res: Response) {
    const { vehicle_id, name, placa } = req.body;

    const updateService = new UpdateVehicleService();

    try {
      const updated = await updateService.execute({ vehicle_id, name, placa });
      return res.json(updated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateVehicleController };
