import { UserEntity } from "../entities/UserEntity";
import { CoreCRUDRepository } from "./CoreCRUDRepository";

export class UserRepository extends CoreCRUDRepository<UserEntity>{
    constructor(){
        super(UserEntity)
    }
}