import { EventsController } from "../controllers/EventsController";
import { generateCRUDRoutes } from "./generateCRUDRoutes";

const eventsController = new EventsController()

export default generateCRUDRoutes(eventsController)