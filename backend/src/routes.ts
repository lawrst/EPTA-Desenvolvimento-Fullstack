import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateVehicleController } from "./controllers/category/CreateVehicleController";
import { RemoveVehicleController } from "./controllers/category/RemoveVehicleController";
import { ArchiveVehicleController } from "./controllers/category/ArchiveVehicleController";
import { UnarchiveVehicleController } from "./controllers/category/UnarchivedVehicleController";
import { ListVehiclesController } from "./controllers/category/ListVehiclesController";
import { UpdateVehicleController } from "./controllers/category/UpdateVehicleController";

const router = Router();

//Rotas do user
//Rota de cadastro do usuário
router.post("/users", new CreateUserController().handle);

//Rota de login do usuário
router.post("/session", new AuthUserController().handle);

//Rota de detalhes do usuário
router.get("/me", isAuthenticated, new DetailUserController().handle);

//Rotas de categoria do veículo
//Rota de cadastro do veículo
router.post("/vehicle", isAuthenticated, new CreateVehicleController().handle);

//Rota para deletar
router.delete(
  "/vehicle",
  isAuthenticated,
  new RemoveVehicleController().handle
);

//Rota para arquivar
router.put(
  "/vehicle/archive",
  isAuthenticated,
  new ArchiveVehicleController().handle
);

//Rota para desarquivar
router.put(
  "/vehicle/unarchive",
  isAuthenticated,
  new UnarchiveVehicleController().handle
);

//Rota de lista dos veículos
router.get("/vehicles", isAuthenticated, new ListVehiclesController().handle);

//Rota para editar o veículo/placa
router.put("/vehicle", isAuthenticated, new UpdateVehicleController().handle);

export { router };
