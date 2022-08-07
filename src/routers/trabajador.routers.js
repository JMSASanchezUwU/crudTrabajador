import {Router} from "express";
import { methods as trabajadorController } from "../controllers/trabajador.controllers";

const router = Router();

router.get("/", trabajadorController.getTrabajadores);
router.get("/:id", trabajadorController.getUnTrabajador);
router.post("/", trabajadorController.addTrabajador);
router.delete("/:id", trabajadorController.deleteTrabajador);
router.put("/:id", trabajadorController.updateTrabajador);

 export default router;