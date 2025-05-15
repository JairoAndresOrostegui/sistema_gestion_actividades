import { PrismaClient } from "../generated/prisma";
import { SemilleroInterface } from "../interfaces/semillero.interface";
import { InternalResponse } from "../shared/dtos/InternalResponse";

const prisma: PrismaClient = new PrismaClient();

export class SemillerosRepository {
  static async createSemillero(
    semillero: SemilleroInterface
  ): Promise<InternalResponse> {
    try {
      const { id, ...createData } = semillero;
      await prisma.semillero.create({ data: createData });
      return {
        success: true,
        message: "Semillero creado correctamente",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error creando semillero",
      };
    }
  }

  static async updateSemillero(
    idSemillero: number,
    newData: SemilleroInterface
  ): Promise<InternalResponse> {
    try {
      const semillero = await prisma.semillero.findUnique({
        where: { id: idSemillero },
      });
      if (semillero) {
        const { id, ...updatedData } = newData; // eslint-disable-line @typescript-eslint/no-unused-vars
        await prisma.semillero.update({
          where: { id: idSemillero },
          data: updatedData,
        });
        return {
          success: true,
          message: "Semillero actualizado correctamente",
        };
      } else {
        return { success: false, message: "Semillero no encontrado" };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando semillero",
      };
    }
  }

  static async deleteSemillero(id: number): Promise<InternalResponse> {
    try {
      const response = await this.getById(id);
      if (response.success) {
        await prisma.semillero.update({
          where: { id: id },
          data: { estado: 0, eliminado_en: new Date() },
        });
        return {
          success: true,
          message: "Semillero eliminado correctamente",
        };
      }
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error eliminando semillero" };
    }
  }

  static async getAllSemilleros(
    page: number,
    perPage: number
  ): Promise<InternalResponse<SemilleroInterface[]>> {
    try {
      const skip = (page - 1) * perPage;
      const semilleros = await prisma.semillero.findMany({
        where: {
          estado: 1,
        },
        include: {
          usuario: {
            select: {
              id: true,
              nombre_completo: true,
            },
          },
        },
        skip,
        take: perPage,
      });

      return { success: true, data: semilleros };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos los semilleros",
      };
    }
  }

  static async getAllSemillerosByStudentId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const semilleros = await prisma.$queryRaw<any[]>`
        SELECT DISTINCT
          gi.id AS grupo_id,
          gi.nombre AS grupo_nombre,
          gi.descripcion,
          gi.cupo,
          gi.fecha_limite_inscripcion,
          gi.fecha_inicio,
          gi.fecha_fin,
          gi.cant_act_aprobatoria,
          gi.estado,
          pa.id AS programa_id,
          pa.nombre AS programa_nombre,
          pa.estado AS programa_estado
        FROM estudiante_actividad ea
        JOIN actividad a ON ea.id_actividad = a.id
        JOIN semillero gi ON a.id_semillero = gi.id
        JOIN programa_academico pa ON gi.id_prog_acad = pa.id
        WHERE ea.id_estudiante = ${id};
`;

      return { success: true, data: semilleros };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: `Error consultando todos los semilleros por el estudiante de id ${id}`,
      };
    }
  }

  static async getAllSemillerosByDocenteId(
    id: number
  ): Promise<InternalResponse<SemilleroInterface[]>> {
    try {
      const semilleros = await prisma.$queryRaw<any[]>`
        SELECT DISTINCT
          gi.id AS grupo_id,
          gi.nombre AS grupo_nombre,
          gi.descripcion,
          gi.cupo,
          gi.fecha_limite_inscripcion,
          gi.fecha_inicio,
          gi.fecha_fin,
          gi.cant_act_aprobatoria,
          gi.estado,
          pa.id AS programa_id,
          pa.nombre AS programa_nombre,
          pa.estado AS programa_estado
        FROM semillero gi
        JOIN programa_academico pa ON gi.id_prog_acad = pa.id
        WHERE gi.estado = 1 AND gi.id_docente = ${id};
`;

      return { success: true, data: semilleros };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos los semilleros",
      };
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<SemilleroInterface>> {
    try {
      const semillero = await prisma.semillero.findUnique({
        where: {
          id: id,
          estado: 1,
        },
      });
      if (semillero) {
        return { success: true, data: semillero };
      }
      return { success: false, message: "Semillero no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando semillero",
      };
    }
  }

  static async getByName(
    name: string
  ): Promise<InternalResponse<SemilleroInterface>> {
    try {
      const semillero = await prisma.semillero.findUnique({
        where: {
          nombre: name,
          estado: 1,
        },
      });
      if (semillero) {
        return { success: true, data: semillero };
      }
      return { success: false, message: "Semillero no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando semillero",
      };
    }
  }

  static async getByDocenteId(
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
  }
}
