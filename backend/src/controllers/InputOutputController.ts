import { InputOutput } from "../entities/InputOutputEntity";
import { InputOutputService } from "../services/InputOutputService";
import { CoreCRUDController } from "./CoreCRUDController";

export class InputOutputController extends CoreCRUDController<InputOutput>{
    constructor(){
        super(new InputOutputService())
    }
}