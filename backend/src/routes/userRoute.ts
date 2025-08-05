import { UserController } from "../controllers/UserController";
import { generateCRUDRoutes } from "./generateCRUDRoutes";

const userController = new UserController()

export default generateCRUDRoutes(userController)