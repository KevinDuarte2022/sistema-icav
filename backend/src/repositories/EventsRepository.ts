import { EventsEntity } from "../entities/EventsEntity";
import { CoreCRUDRepository } from "./CoreCRUDRepository";

export class EventsRepository extends CoreCRUDRepository<EventsEntity>{
    constructor(){
        super(EventsEntity);
    }
}

