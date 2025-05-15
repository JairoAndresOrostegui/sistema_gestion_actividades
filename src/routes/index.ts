import { Request, Response, Router } from "express";
import userRoutes from "./user.routes";
import acaProgRoutes from "./acaprog.routes";
import semillerosRoutes from "./semilleros.routes";
import actividadesRoutes from "./actividades.routes";
import estuActRoutes from "./estuAct.routes";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

router.use("/v1/users", userRoutes);
router.use("/v1/academic-programs", acaProgRoutes);
router.use("/v1/semilleros", semillerosRoutes);
router.use("/v1/actividades", actividadesRoutes);
router.use("/v1/estu-act", estuActRoutes);

export default router;
