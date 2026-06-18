import { Router } from "express";
import {
  getAllPersonajes,
  getPersonajeById,
  createPersonaje,
  updatePersonaje,
  deletePersonaje,
} from "src/controllers/personajes.controllers.js";

const router = Router();

router.get("/", getAllPersonajes);
router.get("/:id", getPersonajeById);
router.post("/", createPersonaje);
router.put("/:id", updatePersonaje);
router.delete("/:id", deletePersonaje);

export default router;
