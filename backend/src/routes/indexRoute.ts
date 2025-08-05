import { Router } from "express";
import inputOutputRoutes from "./inputOutputRoute"

const router = Router();

router.use("/input-output", inputOutputRoutes)

export default router;