import { Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ControllerError } from "../shared/exceptions/ControllerError";
import { EstuActService } from "../services/estuact.service";

export class EstuActController {
  static async updateEstuAct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await EstuActService.updateEstuAct(id);

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
}
