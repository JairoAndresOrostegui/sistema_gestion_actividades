import { EstuActInterface } from "../interfaces/estuact.interface";
import { EstuActRepository } from "../repositories/estuact.repository";
import { InternalResponse } from "../shared/dtos/InternalResponse";
import { CaseUseException } from "../shared/exceptions/CaseUseException";

export class EstuActService {
  static async createEstuAct(
    estuAct: EstuActInterface
  ): Promise<InternalResponse> {
    try {
      return await EstuActRepository.createEstuAct(estuAct);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error creando registro");
    }
  }

  static async updateEstuAct(id: number): Promise<InternalResponse> {
    try {
      return await EstuActRepository.updateEstuAct(id);
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando usuario",
      };
    }
  }
}
