import { EventsEntity } from "../entities/EventsEntity";
import { EventsRepository } from "../repositories/EventsRepository";
import { CoreCRUDService } from "./CoreCRUDService";

export class EventsService extends CoreCRUDService<EventsEntity>{
    constructor(){
        super(new EventsRepository())
    }
} 