import { RECORDS_PER_PAGE } from "../config";
import { AcaProgInterface } from "../interfaces/acaprog.interface";
import { AcaProgRepository } from "../repositories/acaprog.repository";
import { InternalResponse } from "../shared/dtos/InternalResponse";
import { CaseUseException } from "../shared/exceptions/CaseUseException";
import { formatName } from "../shared/utils";

export class AcaProgService {
  static async createAcaProg(
    acaProg: AcaProgInterface
  ): Promise<InternalResponse> {
    try {
      const nombre = formatName(acaProg.nombre);
      const response = await AcaProgRepository.getByName(nombre);
      if (response.success) {
        return {
          success: false,
          message: `Ya existe un programa académico con el nombre ${acaProg.nombre}`,
        };
      }

      return await AcaProgRepository.createAcaProg(acaProg);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error creando programa académico");
    }
  }

  static async updateAcaProg(
    id: number,
    updatedData: any
  ): Promise<InternalResponse> {
    try {
      const existingAcaProg = await this.getById(id);
      if (existingAcaProg.success) {
        const updatedAcaProg: AcaProgInterface = {
          ...existingAcaProg.data!,
          ...updatedData,
        };
        return await AcaProgRepository.updateAcaProg(id, updatedAcaProg);
      }
      return { success: false, message: "Programa académico no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando programa académico",
      };
    }
  }

  static async getAllAcaProg(page = 1): Promise<any> {
    try {
      return await AcaProgRepository.getAllAcaProg(page, RECORDS_PER_PAGE);
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteAcaProg(id: number): Promise<InternalResponse> {
    try {
      return await AcaProgRepository.deleteAcaProg(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error eliminando programa académico");
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<AcaProgInterface>> {
    const response = await AcaProgRepository.getById(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getByDirectorId(
    id: number
  ): Promise<InternalResponse<AcaProgInterface>> {
    const response = await AcaProgRepository.getByDirectorId(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }
}
