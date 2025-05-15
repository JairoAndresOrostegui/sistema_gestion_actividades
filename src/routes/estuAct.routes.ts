import { Request, Response, Router } from "express";
import { validateJwt } from "../middlewares/validate-jwt.middleware";
import { EstuActController } from "../controllers/estuAct.controller";

const router = Router();

router.put("/:id", validateJwt, (req: Request, res: Response) =>
  EstuActController.updateEstuAct(req, res)
);
export default router;
