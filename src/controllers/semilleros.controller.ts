import { Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ControllerError } from "../shared/exceptions/ControllerError";
import { SemillerosService } from "../services/semilleros.service";

export class SemillerosController {
  static async createSemillero(req: Request, res: Response) {
    try {
      const response = await SemillerosService.createSemillero({
        id_prog_acad: req.body.id_prog_acad,
        id_docente: req.body.id_docente,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        cupo: req.body.cupo,
        fecha_limite_inscripcion: req.body.fecha_limite_inscripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        cant_act_aprobatoria: req.body.cant_act_aprobatoria,
        estado: 1,
        creado_en: new Date(),
      });
      if (response.success) {
        res.status(HttpResponseCodes.CREATED).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async updateSemillero(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.updateSemillero(id, {
        id_prog_acad: req.body.id_prog_acad,
        id_docente: req.body.id_docente,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        cupo: req.body.cupo,
        fecha_limite_inscripcion: req.body.fecha_limite_inscripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        cant_act_aprobatoria: req.body.cant_act_aprobatoria,
      });

      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async getAllSemilleros(req: Request, res: Response) {
    try {
      const pageParam = req.query.page;
      const response = await SemillerosService.getAllSemilleros(
        Number(pageParam)
      );
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async deleteSemillero(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.deleteSemillero(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.error(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.getById(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.NOT_FOUND).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async getByDocenteId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.getByDocenteId(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.NOT_FOUND).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async getAllSemillerosByStudentId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.getAllSemillerosByStudentId(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.NOT_FOUND).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async getAllSemillerosByDocenteId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SemillerosService.getAllSemillerosByDocenteId(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.NOT_FOUND).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }
}
