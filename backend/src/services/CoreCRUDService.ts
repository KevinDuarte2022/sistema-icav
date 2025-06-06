import { DeepPartial } from "typeorm";
import { CoreCRUDRepository } from "../repositories/CoreCRUDRepository";

export abstract class CoreCRUDService<T extends {id:string }>{
    protected repository: CoreCRUDRepository<T>

    constructor (repository: CoreCRUDRepository<T>){
        this.repository = repository
    }

    list(): Promise<T[]> {
        return this.repository.findAll()
    }

    get(id: string): Promise<T | null>{
        return this.repository.findById(id)
    }

    create(data: DeepPartial<T>): Promise<T>{
        return this.repository.create(data)
    }

  update(id: string, data: DeepPartial<T>): Promise<T | null> {
    return this.repository.update(id, data);
}


    delete(id: string): Promise<boolean>{
        return this.repository.delete(id)
    }
}