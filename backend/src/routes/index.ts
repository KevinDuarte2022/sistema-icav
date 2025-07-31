import { Router } from "express";
import inputOutputRoutes from "./inputOutput"

const router = Router();

router.use("/input-output", inputOutputRoutes)

export default router;