import { Router } from "express";
import { InputOutputController } from "../controllers/InputOutputController";

const inputOutputController = new InputOutputController()
const router = Router();

router.get("/", (req, res) => inputOutputController.list(req, res));
router.post("/", (req, res) => inputOutputController.create(req, res))
router.patch("/:id", (req, res) => inputOutputController.update(req, res))

export default router