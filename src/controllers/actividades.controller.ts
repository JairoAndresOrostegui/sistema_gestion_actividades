import { Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ControllerError } from "../shared/exceptions/ControllerError";
import { SemillerosService } from "../services/semilleros.service";
import { ActividadesService } from "../services/actividades.service";

export class ActividadesController {
  static async createActividad(req: Request, res: Response) {
    try {
      const response = await ActividadesService.createActividad({
        id_semillero: req.body.id_semillero,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        url: req.body.url,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
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

  static async updateActividad(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await ActividadesService.updateActividad(id, {
        id_semillero: req.body.id_semillero,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        url: req.body.url,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
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

  static async getAllActividades(req: Request, res: Response) {
    try {
      const pageParam = req.query.page;
      const response = await ActividadesService.getAllActividades(
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

  static async getAllActividadesByDocenteId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await ActividadesService.getAllActividadesByDocenteId(
        id
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

  static async getAllActividadesBySemilleroIdDocenteId(
    req: Request,
    res: Response
  ) {
    try {
      const id_semillero = parseInt(req.params.id_semillero);
      const id_docente = parseInt(req.params.id_docente);
      const response = await ActividadesService.getAllActividadesBySemilleroIdDocenteId(
        id_semillero,
        id_docente
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

  static async getAllActividadesBySemilleroId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await ActividadesService.getAllActividadesBySemilleroId(
        id
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

  static async getAllActividadesByStudentId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await ActividadesService.getAllActividadesByStudentId(
        id
      );
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

  static async deleteActividad(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await ActividadesService.deleteActividad(id);
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
      const response = await ActividadesService.getById(id);
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
}
