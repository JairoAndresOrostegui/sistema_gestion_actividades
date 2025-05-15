import { RECORDS_PER_PAGE } from "../config";
import { SemilleroInterface } from "../interfaces/semillero.interface";
import { SemillerosRepository } from "../repositories/semilleros.repository";
import { InternalResponse } from "../shared/dtos/InternalResponse";
import { CaseUseException } from "../shared/exceptions/CaseUseException";
import { formatName } from "../shared/utils";

export class SemillerosService {
  static async createSemillero(
    semillero: SemilleroInterface
  ): Promise<InternalResponse> {
    try {
      const nombre = formatName(semillero.nombre);
      const response = await SemillerosRepository.getByName(nombre);
      if (response.success) {
        return {
          success: false,
          message: `Ya existe un semillero con el nombre ${semillero.nombre}`,
        };
      }

      return await SemillerosRepository.createSemillero(semillero);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error creando semillero");
    }
  }

  static async updateSemillero(
    id: number,
    semilleroData: any
  ): Promise<InternalResponse> {
    try {
      const existingSemillero = await this.getById(id);
      if (existingSemillero.success) {
        const updatedSemillero: SemilleroInterface = {
          ...existingSemillero.data!,
          ...semilleroData,
        };
        return await SemillerosRepository.updateSemillero(id, updatedSemillero);
      }
      return { success: false, message: "Semillero no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando semillero",
      };
    }
  }

  static async getAllSemilleros(page = 1): Promise<any> {
    try {
      return await SemillerosRepository.getAllSemilleros(
        page,
        RECORDS_PER_PAGE
      );
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteSemillero(id: number): Promise<InternalResponse> {
    try {
      return await SemillerosRepository.deleteSemillero(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error eliminando semillero");
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<SemilleroInterface>> {
    const response = await SemillerosRepository.getById(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getByDocenteId(
    id: number
  ): Promise<InternalResponse<SemilleroInterface>> {
    const response = await SemillerosRepository.getByDocenteId(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getAllSemillerosByDocenteId(
    id: number
  ): Promise<InternalResponse<SemilleroInterface[]>> {
    const response = await SemillerosRepository.getAllSemillerosByDocenteId(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getAllSemillerosByStudentId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    const response = await SemillerosRepository.getAllSemillerosByStudentId(id);
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
