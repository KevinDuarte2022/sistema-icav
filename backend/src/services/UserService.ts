import { UserEntity } from "../entities/UserEntity";
import { UserRepository } from "../repositories/UserRepository";
import { CoreCRUDService } from "./CoreCRUDService";

export class UserService extends CoreCRUDService<UserEntity>{
    constructor(){
        super(new UserRepository())
    }
}