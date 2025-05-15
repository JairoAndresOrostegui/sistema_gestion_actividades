import { Request, Response, Router } from "express";
import { AcaProgController } from "../controllers/acaprog.controller";
import { validateJwt } from "../middlewares/validate-jwt.middleware";
import { validateRole } from "../middlewares/validate-role.middleware";
import { ADMIN_ROLE_ID } from "../config";
const router = Router();

router.post(
  "/",
  validateJwt,
  validateRole(ADMIN_ROLE_ID),
  (req: Request, res: Response) => {
    AcaProgController.createAcaProg(req, res);
  }
);
router.get("/", validateJwt, (req: Request, res: Response) => {
  AcaProgController.getAllAcaProg(req, res);
});
router.get("/director/:id", validateJwt, (req: Request, res: Response) => {
  AcaProgController.getByDirectorId(req, res);
});
router.get("/:id", validateJwt, (req: Request, res: Response) => {
  AcaProgController.getById(req, res);
});
router.put("/:id", validateJwt, (req: Request, res: Response) => {
  AcaProgController.updateAcaProg(req, res);
});
router.delete(
  "/:id",
  validateJwt,
  validateRole(ADMIN_ROLE_ID),
  (req: Request, res: Response) => {
    AcaProgController.deleteAcaProg(req, res);
  }
);

export default router;
