import { EventsEntity } from "../entities/EventsEntity";
import { EventsService } from "../services/EventsService";
import { CoreCRUDController } from "./CoreCRUDController";

export class EventsController extends CoreCRUDController<EventsEntity>{
    constructor(){
        super(new EventsService())
    }
}