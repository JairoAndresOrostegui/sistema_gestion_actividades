import { PrismaClient } from "../generated/prisma";
import { AcaProgInterface } from "../interfaces/acaprog.interface";
import { InternalResponse } from "../shared/dtos/InternalResponse";

const prisma: PrismaClient = new PrismaClient();

export class AcaProgRepository {
  static async createAcaProg(
    acaProg: AcaProgInterface
  ): Promise<InternalResponse> {
    try {
      const { id, ...createData } = acaProg;
      await prisma.programa_academico.create({ data: createData });
      return {
        success: true,
        message: "Programa académico creado correctamente",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error creando programa académico",
      };
    }
  }

  static async updateAcaProg(
    id_acaProg: number,
    newData: AcaProgInterface
  ): Promise<InternalResponse> {
    try {
      const acaProg = await prisma.programa_academico.findUnique({
        where: { id: id_acaProg },
      });
      if (acaProg) {
        const { id, ...updatedData } = newData; // eslint-disable-line @typescript-eslint/no-unused-vars
        await prisma.programa_academico.update({
          where: { id: id_acaProg },
          data: updatedData,
        });
        return {
          success: true,
          message: "Programa académico actualizado correctamente",
        };
      } else {
        return { success: false, message: "Programa académico no encontrado" };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando programa académico",
      };
    }
  }

  static async deleteAcaProg(id: number): Promise<InternalResponse> {
    try {
      const response = await this.getById(id);
      if (response.success) {
        await prisma.programa_academico.update({
          where: { id: id },
          data: { estado: 0, eliminado_en: new Date() },
        });
        return {
          success: true,
          message: "Programa académico eliminado correctamente",
        };
      }
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error eliminando programa académico" };
    }
  }

  static async getAllAcaProg(page: number, perPage: number): Promise<any> {
    try {
      const skip = (page - 1) * perPage;
      const products = await prisma.programa_academico.findMany({
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

      return { success: true, data: products };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error consultando todos los programas académicos",
      };
    }
  }

  static async getById(
    id: number
  ): Promise<InternalResponse<AcaProgInterface>> {
    try {
      const acaProg = await prisma.programa_academico.findUnique({
        where: {
          id: id,
          estado: 1,
        },
      });
      if (acaProg) {
        return { success: true, data: acaProg };
      }
      return { success: false, message: "Programa académico no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando programa académico",
      };
    }
  }

  static async getByName(
    name: string
  ): Promise<InternalResponse<AcaProgInterface>> {
    try {
      const acaProg = await prisma.programa_academico.findUnique({
        where: {
          nombre: name,
          estado: 1,
        },
      });
      if (acaProg) {
        return { success: true, data: acaProg };
      }
      return { success: false, message: "Programa académico no encontrado" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando programa académico",
      };
    }
  }

  static async getByDirectorId(
    id: number
  ): Promise<InternalResponse<AcaProgInterface>> {
    try {
      const acaProg = await prisma.programa_academico.findUnique({
        where: {
          id_director: id,
          estado: 1,
        },
      });
      if (acaProg) {
        return { success: true, data: acaProg };
      }
      return {
        success: false,
        message: `El director de ID ${id} no tiene programas académicos asignados.`,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error consultando programa académico",
      };
    }
  }
}
