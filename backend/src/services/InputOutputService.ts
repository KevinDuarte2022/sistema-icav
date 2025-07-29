import { InputOutput } from "../entities/InputOutputEntity";
import { InputOutputRepository } from "../repositories/InputOutputRepository";
import { CoreCRUDService } from "./CoreCRUDService";

export class InputOutputService extends CoreCRUDService<InputOutput>{
    constructor(){
        super(new InputOutputRepository())
    }
} 