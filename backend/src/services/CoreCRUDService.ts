import { DeepPartial } from "typeorm";
import { CoreCRUDRepository } from "../repositories/CoreCRUDRepository";

export abstract class CoreCRUDService<T extends { id: string }> {
    protected repository: CoreCRUDRepository<T>

    constructor(repository: CoreCRUDRepository<T>) {
        this.repository = repository
    }

    list(): Promise<T[]> {
        return this.repository.findAll()
    }

    findById(id: string): Promise<T | null> {
        return this.repository.findById(id)
    }

    create(data: DeepPartial<T>): Promise<T> {
        return this.repository.save(data);
    }

    async update(id: string, data: DeepPartial<T>): Promise<T | null> {
        const item = await this.repository.findById(id)
        if (!item) {
            throw new Error("Item not found")
        }
        const merged = this.repository.merge(item, data)
        return await this.repository.save(merged)
    }


    delete(id: string): Promise<boolean> {
        return this.repository.delete(id)
    }


}