import { Repository, EntityTarget, DeepPartial } from "typeorm";
import { AppDataSource } from "../data-source";

export abstract class CoreCRUDRepository<T extends { id: string }> {
  protected repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<T | null> {
    return this.repository.findOneBy({ id } as any);
  }

  async create(data: DeepPartial<T>): Promise<T> { //DeepPartial transforma todos os campos de um tipo T em opcionais
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: string, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id);
    if (!entity) return null;
    Object.assign(entity, data);
    return this.repository.save(entity);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected !== 0;
  }

  async save(data: DeepPartial<T>): Promise<T>{
    return this.repository.save(data)
  }

  merge(entity: T, data: DeepPartial<T>): T{
    return this.repository.merge(entity, data)
  }
}