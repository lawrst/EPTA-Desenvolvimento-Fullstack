import { Request, Response } from "express";
import { ListVehiclesService } from "../../services/category/LitsVehiclesService";

class ListVehiclesController {
  async handle(req: Request, res: Response) {
    const listVehiclesService = new ListVehiclesService();

    const vehicle = await listVehiclesService.execute();

    return res.json(vehicle);
  }
}

export { ListVehiclesController };
