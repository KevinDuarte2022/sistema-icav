import { InputOutputController } from "../controllers/InputOutputController";
import { generateCRUDRoutes } from "./generateCRUDRoutes";

const inputOutputController = new InputOutputController()

export default generateCRUDRoutes(inputOutputController)