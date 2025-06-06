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

}