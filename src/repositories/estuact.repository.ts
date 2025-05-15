import { PrismaClient } from "../generated/prisma";
import { EstuActInterface } from "../interfaces/estuact.interface";
import { InternalResponse } from "../shared/dtos/InternalResponse";

const prisma: PrismaClient = new PrismaClient();

export class EstuActRepository {
  static async createEstuAct(
    estuAct: EstuActInterface
  ): Promise<InternalResponse> {
    try {
      const { id, ...createData } = estuAct;
      await prisma.estudiante_actividad.create({ data: createData });
      return {
        success: true,
        message: "Registro (estudiante_actividad) creado correctamente",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error creando registro (estudiante_actividad)",
      };
    }
  }

  static async updateEstuAct(id: number): Promise<InternalResponse> {
    try {
      const estuAct = await prisma.estudiante_actividad.findUnique({
        where: { id: id },
      });
      if (estuAct) {
        await prisma.estudiante_actividad.update({
          where: { id: id },
          data: {
            estado: estuAct.estado === 0 ? 1 : 0,
          },
        });
        return {
          success: true,
          message: "Registro actualizado correctamente",
        };
      } else {
        return { success: false, message: "Registro no encontrado" };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando actividad",
      };
    }
  }

  static async getAllActividadesByStudentId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const actividades = await prisma.estudiante_actividad.findMany({
        where: {
          estado: 1,
          id_estudiante: id,
        },
      });

      return { success: true, data: actividades };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: `Error consultando todos las actividades por el estudiante de id ${id}`,
      };
    }
  }
}
