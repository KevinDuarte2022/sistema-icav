import { Request, Response } from "express";
import { CoreCRUDService } from "../services/CoreCRUDService";

export abstract class CoreCRUDController<T extends { id: string }> {
    protected service: CoreCRUDService<T>;

    constructor(service: CoreCRUDService<T>) {
        this.service = service
    }

    async list(req: Request, res: Response): Promise<void> {
        try {
            const items = await this.service.list();
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: "Error listing items", error });
        }
    }

    async create(req: Request, res: Response): Promise<void>{
        try {
            const item = await this.service.create(req.body);
            res.status(201).json(item)
        } catch (error) {
            res.status(500).json({message: "Error creating item", error});
        }
    }

    async update(req: Request, res: Response): Promise<void>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updated = await this.service.update(id, data);
            res.json(updated);
        } catch (error) {
            res.status(500).json({message: "Error updating item", error})
        }
    }

    async findById(req: Request, res: Response): Promise<void>{
        try {
            const id = req.params.id;
            const item = await this.service.findById(id)
        if (item){
            res.json(item);
        } else {
            res.status(404).json({message: "Item not found"})
        }
        } catch (error) {
            res.status(500).json({message: "Error fetching item", error})
        }
    }

    async delete(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id;
            await this.service.delete(id);
            res.status(204).send()
        } catch(error){
            res.status(500).json({message: "Error fetching item", error})
        }
    }
}