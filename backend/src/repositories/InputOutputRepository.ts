import { InputOutput } from "../entities/InputOutputEntity";
import { CoreCRUDRepository } from "./CoreCRUDRepository";

export class InputOutputRepository extends CoreCRUDRepository<InputOutput>{
    constructor(){
        super(InputOutput);
    }
}

