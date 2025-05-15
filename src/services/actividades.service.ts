import { RECORDS_PER_PAGE } from "../config";
import { ActividadInterface } from "../interfaces/actividad.interface";
import { SemilleroInterface } from "../interfaces/semillero.interface";
import { ActividadesRepository } from "../repositories/actividades.repository";
import { SemillerosRepository } from "../repositories/semilleros.repository";
import { InternalResponse } from "../shared/dtos/InternalResponse";
import { CaseUseException } from "../shared/exceptions/CaseUseException";

export class ActividadesService {
  static async createActividad(
    actividad: ActividadInterface
  ): Promise<InternalResponse> {
    try {
      return await ActividadesRepository.createActividad(actividad);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error creando actividad");
    }
  }

  static async updateActividad(
    id: number,
    actividadData: any
  ): Promise<InternalResponse> {
    try {
      const existingActividad = await this.getById(id);
      if (existingActividad.success) {
        const updatedActividad: ActividadInterface = {
          ...existingActividad.data!,
          ...actividadData,
        };
        return await ActividadesRepository.updateActividad(
          id,
          updatedActividad
        );
      }
      return { success: false, message: "Actividad no encontrada" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando actividad",
      };
    }
  }

  static async getAllActividades(page = 1): Promise<any> {
    try {
      return await ActividadesRepository.getAllActividades(
        page,
        RECORDS_PER_PAGE
      );
    } catch (error) {
      console.error(error);
    }
  }

  static async getAllActividadesBySemilleroIdDocenteId(
    id_semillero: number,
    id_docente: number
  ): Promise<any> {
    try {
      return await ActividadesRepository.getAllActividadesBySemilleroIdDocenteId(
        id_semillero,
        id_docente
      );
    } catch (error) {
      console.log(error);
      throw new CaseUseException(
        "Error obteniendo actividades por el ID del docente y del semilleroF"
      );
    }
  }

  static async getAllActividadesByDocenteId(id: number): Promise<any> {
    try {
      return await ActividadesRepository.getAllActividadesByDocenteId(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException(
        "Error obteniendo actividades por el ID del docente"
      );
    }
  }

  static async getAllActividadesBySemilleroId(
    id: number
  ): Promise<InternalResponse<ActividadInterface[]>> {
    try {
      return await ActividadesRepository.getAllActividadesBySemilleroId(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException(
        "Error obteniendo actividades por el ID del semillero"
      );
    }
  }

  static async getAllActividadesByStudentId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    const response = await ActividadesRepository.getAllActividadesByStudentId(
      id
    );
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async deleteActividad(id: number): Promise<InternalResponse> {
    try {
      return await ActividadesRepository.deleteActividad(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error eliminando actividad");
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<ActividadInterface>> {
    const response = await ActividadesRepository.getById(id);
    if (response.success) {
      return {
        success: true,
        data: response.data!,
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  /*   static async getByDocenteId(
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
  } */
}
