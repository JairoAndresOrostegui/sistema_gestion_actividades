import { Request, Response, Router } from "express";
import { validateJwt } from "../middlewares/validate-jwt.middleware";
import { validateRole } from "../middlewares/validate-role.middleware";
import { DIRPROG_ROLE_ID } from "../config";
import { SemillerosController } from "../controllers/semilleros.controller";
const router = Router();

router.post(
  "/",
  validateJwt,
  validateRole(DIRPROG_ROLE_ID),
  (req: Request, res: Response) => {
    SemillerosController.createSemillero(req, res);
  }
);
router.get("/", validateJwt, (req: Request, res: Response) => {
  SemillerosController.getAllSemilleros(req, res);
});
router.get("/:id", validateJwt, (req: Request, res: Response) => {
  SemillerosController.getById(req, res);
});
router.get("/docente/:id", validateJwt, (req: Request, res: Response) => {
  SemillerosController.getByDocenteId(req, res);
});
router.get("/estudiantes/:id", validateJwt, (req: Request, res: Response) => {
  SemillerosController.getAllSemillerosByStudentId(req, res);
});
router.get("/docentes/:id", validateJwt, (req: Request, res: Response) => {
  SemillerosController.getAllSemillerosByDocenteId(req, res);
});
router.put("/:id", validateJwt, (req: Request, res: Response) =>
  SemillerosController.updateSemillero(req, res)
);
router.delete(
  "/:id",
  validateJwt,
  validateRole(DIRPROG_ROLE_ID),
  (req: Request, res: Response) => {
    SemillerosController.deleteSemillero(req, res);
  }
);

export default router;
