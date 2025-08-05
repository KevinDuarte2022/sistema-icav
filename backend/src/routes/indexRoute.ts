import { Router } from "express";
import inputOutputRoutes from "./eventsRoute"
import eventsRoute from "./eventsRoute";
import userRoute from "./userRoute";

const router = Router();

router.use("/events", eventsRoute)
router.use("/user", userRoute)
export default router;