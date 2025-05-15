import { Request, Response, Router } from "express";
import { validateJwt } from "../middlewares/validate-jwt.middleware";
import { validateRole } from "../middlewares/validate-role.middleware";
import { DIRPROG_ROLE_ID, DOCENTE_ROLE_ID } from "../config";
import { ActividadesController } from "../controllers/actividades.controller";
const router = Router();

router.post(
  "/",
  validateJwt,
  validateRole(DOCENTE_ROLE_ID),
  (req: Request, res: Response) => {
    ActividadesController.createActividad(req, res);
  }
);
router.get("/", validateJwt, (req: Request, res: Response) => {
  ActividadesController.getAllActividades(req, res);
});
router.get("/:id", validateJwt, (req: Request, res: Response) => {
  ActividadesController.getById(req, res);
});
router.get("/docente/:id", validateJwt, (req: Request, res: Response) => {
  ActividadesController.getAllActividadesByDocenteId(req, res);
});
router.get(
  "/docente/:id_semillero/:id_docente",
  validateJwt,
  (req: Request, res: Response) => {
    ActividadesController.getAllActividadesBySemilleroIdDocenteId(req, res);
  }
);
router.get("/estudiantes/:id", validateJwt, (req: Request, res: Response) => {
  ActividadesController.getAllActividadesByStudentId(req, res);
});
router.get("/semillero/:id", validateJwt, (req: Request, res: Response) => {
  ActividadesController.getAllActividadesBySemilleroId(req, res);
});
router.put("/:id", validateJwt, (req: Request, res: Response) =>
  ActividadesController.updateActividad(req, res)
);
router.delete(
  "/:id",
  validateJwt,
  validateRole(DOCENTE_ROLE_ID),
  (req: Request, res: Response) => {
    ActividadesController.deleteActividad(req, res);
  }
);

export default router;
