import { Router } from "express";
import { CoreCRUDController } from "../controllers/CoreCRUDController";

export function generateCRUDRoutes<T extends { id: string }>(controller: CoreCRUDController<T>): Router {
   const router = Router();
   
    router.get("/", (req, res) => controller.list(req, res));
    router.get("/:id", (req, res) => controller.findById(req, res));
    router.post("/", (req, res) => controller.create(req, res));
    router.patch("/:id", (req, res) => controller.update(req, res));
    router.delete("/:id", (req, res) => controller.delete(req, res));

    return router;

}