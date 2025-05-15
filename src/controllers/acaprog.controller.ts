import { Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ControllerError } from "../shared/exceptions/ControllerError";
import { AcaProgService } from "../services/acaprog.service";

export class AcaProgController {
  static async createAcaProg(req: Request, res: Response) {
    try {
      const response = await AcaProgService.createAcaProg({
        nombre: req.body.nombre,
        id_director: req.body.id_director,
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

  static async updateAcaProg(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await AcaProgService.updateAcaProg(id, {
        nombre: req.body.nombre,
        id_director: req.body.id_director,
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

  static async getAllAcaProg(req: Request, res: Response) {
    try {
      const pageParam = req.query.page;
      const response = await AcaProgService.getAllAcaProg(Number(pageParam));
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

  static async deleteAcaProg(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await AcaProgService.deleteAcaProg(id);
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
      const response = await AcaProgService.getById(id);
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

  static async getByDirectorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await AcaProgService.getByDirectorId(id);
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
