import { PrismaClient } from "../generated/prisma";
import { ActividadInterface } from "../interfaces/actividad.interface";
import { InternalResponse } from "../shared/dtos/InternalResponse";

const prisma: PrismaClient = new PrismaClient();

export class ActividadesRepository {
  static async createActividad(
    actividad: ActividadInterface
  ): Promise<InternalResponse> {
    try {
      const { id, ...createData } = actividad;
      await prisma.actividad.create({ data: createData });
      return {
        success: true,
        message: "Actividad creada correctamente",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error creando actividad",
      };
    }
  }

  static async updateActividad(
    idActividad: number,
    newData: ActividadInterface
  ): Promise<InternalResponse> {
    try {
      const actividad = await prisma.actividad.findUnique({
        where: { id: idActividad },
      });
      if (actividad) {
        const { id, ...updatedData } = newData; // eslint-disable-line @typescript-eslint/no-unused-vars
        await prisma.actividad.update({
          where: { id: idActividad },
          data: updatedData,
        });
        return {
          success: true,
          message: "Actividad actualizada correctamente",
        };
      } else {
        return { success: false, message: "Actividad no encontrada" };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando actividad",
      };
    }
  }

  static async deleteActividad(id: number): Promise<InternalResponse> {
    try {
      const response = await this.getById(id);
      if (response.success) {
        await prisma.actividad.update({
          where: { id: id },
          data: { estado: 0, eliminado_en: new Date() },
        });
        return {
          success: true,
          message: "Actvidad eliminada correctamente",
        };
      }
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error eliminando actividad" };
    }
  }

  static async getAllActividades(
    page: number,
    perPage: number
  ): Promise<InternalResponse<ActividadInterface[]>> {
    try {
      const skip = (page - 1) * perPage;
      const actividades = await prisma.actividad.findMany({
        where: {
          estado: 1,
        },
        skip,
        take: perPage,
      });

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos las actividades",
      };
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<ActividadInterface>> {
    try {
      const actividad = await prisma.actividad.findUnique({
        where: {
          id: id,
          estado: 1,
        },
      });
      if (actividad) {
        return { success: true, data: actividad };
      }
      return { success: false, message: "Actividad no encontrada" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando actividad",
      };
    }
  }

  static async getAllActividadesByDocenteId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const actividades = await prisma.actividad.findMany({
        where: {
          estado: 1,
          semillero: {
            id_docente: id,
          },
        },
        include: {
          semillero: true,
        },
      });

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos las actividades",
      };
    }
  }

  static async getAllActividadesBySemilleroIdDocenteId(
    id_semillero: number,
    id_docente: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const actividades = await prisma.$queryRaw<any[]>`
        SELECT 
          a.id AS actividad_id,
          a.nombre AS nombre,
          a.descripcion,
          a.url,
          a.fecha_inicio,
          a.fecha_fin,
          a.estado,
          a.creado_en,
          gi.id AS grupo_id,
          gi.nombre AS grupo_nombre,
          gi.descripcion AS grupo_descripcion,
          gi.cupo,
          gi.fecha_limite_inscripcion,
          gi.fecha_inicio AS grupo_fecha_inicio,
          gi.fecha_fin AS grupo_fecha_fin,
          gi.cant_act_aprobatoria,
          u.id AS docente_id,
          u.nombre_completo AS docente_nombre
        FROM actividad a
        JOIN semillero gi ON a.id_semillero = gi.id
        JOIN usuario u ON gi.id_docente = u.id
        WHERE gi.id_docente = ${id_docente}
          AND gi.id = ${id_semillero};

  `;

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos las actividades",
      };
    }
  }

  static async getAllActividadesBySemilleroId(
    id: number
  ): Promise<InternalResponse<ActividadInterface[]>> {
    try {
      const actividades = await prisma.actividad.findMany({
        where: {
          estado: 1,
          id_semillero: id,
        },
      });

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos las actividades",
      };
    }
  }

  static async getAllActividadesByStudentId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const actividades = await prisma.$queryRaw<any[]>`
        SELECT 
          a.id AS actividad_id,
          a.nombre,
          a.descripcion,
          a.url,
          a.fecha_inicio,
          a.fecha_fin,
          a.estado,
          a.id_semillero,
          ea.estado AS estado_actividad
        FROM estudiante_actividad ea
        JOIN actividad a ON ea.id_actividad = a.id
        WHERE ea.id_estudiante = ${id};
  `;

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: `Error consultando todos las actividades por el estudiante de id ${id}`,
      };
    }
  }

  /*   static async getByDocenteId(
    id: number
  ): Promise<InternalResponse<SemilleroInterface>> {
    try {
      const semillero = await prisma.semillero.findUnique({
        where: {
          id_docente: id,
          estado: 1,
        },
      });
      if (semillero) {
        return { success: true, data: semillero };
      }
      return {
        success: false,
        message: `El docente de ID ${id} no tiene semilleros asignados.`,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando semillero",
      };
    }
  } */
}
