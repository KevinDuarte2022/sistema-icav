import { UserEntity } from "../entities/UserEntity";
import { UserService } from "../services/UserService";
import { CoreCRUDController } from "./CoreCRUDController";

export class UserController extends CoreCRUDController<UserEntity>{
    constructor(){
        super(new UserService())
    }
}