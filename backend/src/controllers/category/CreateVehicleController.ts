import { Request, Response } from "express";
import { CreateVehicleService } from "../../services/category/CreateVehicleService";

class CreateVehicleController {
  async handle(req: Request, res: Response) {
    const { name, placa } = req.body;

    const createVehicleService = new CreateVehicleService();
    const vehicle = await createVehicleService.execute({
      name,
      placa,
    });

    return res.json(vehicle);
  }
}

export { CreateVehicleController };
