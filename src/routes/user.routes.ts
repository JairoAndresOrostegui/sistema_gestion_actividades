import { Request, Response, Router } from "express";
import { UsersController } from "../controllers/users.controller";
import { validateJwt } from "../middlewares/validate-jwt.middleware";
import { validateUserCreation } from "../middlewares/validate-user-creation.middleware";
import { validateUserList } from "../middlewares/validate-user-list.middleware";
import { validatePermissionParam } from "../middlewares/validate-permission-param";
const router = Router();

router.post(
  "/",
  validateJwt,
  validateUserCreation,
  (req: Request, res: Response) => {
    UsersController.createUser(req, res);
  }
);
router.post("/authenticate", (req: Request, res: Response) => {
  UsersController.authenticateUser(req, res);
});
router.post("/authenticate/forgot-password", (req: Request, res: Response) => {
  UsersController.forgotPassword(req, res);
});
router.post("/authenticate/reset-password", (req: Request, res: Response) => {
  UsersController.resetPassword(req, res);
});

router.get("/unique/:id", validateJwt, (req: Request, res: Response) =>
  UsersController.getById(req, res)
);
router.get(
  "/role/:id",
  validateJwt,
  validateUserList,
  (req: Request, res: Response) => UsersController.getByRoleId(req, res)
);
router.get("/free-directors", validateJwt, (req: Request, res: Response) =>
  UsersController.getAllAvailableDirectors(req, res)
);
router.get("/actividad/:id", validateJwt, (req: Request, res: Response) =>
  UsersController.getAllStudentsByActividadId(req, res)
);
router.get("/free-docentes", validateJwt, (req: Request, res: Response) =>
  UsersController.getAllAvailableDocentes(req, res)
);
router.get("/refresh-token", validateJwt, (req: Request, res: Response) =>
  UsersController.refreshToken(req, res)
);
router.put(
  "/:id",
  validateJwt,
  validatePermissionParam,
  (req: Request, res: Response) => UsersController.updateUser(req, res)
);
router.delete(
  "/:id",
  validateJwt,
  validatePermissionParam,
  (req: Request, res: Response) => UsersController.deleteUser(req, res)
);
export default router;
