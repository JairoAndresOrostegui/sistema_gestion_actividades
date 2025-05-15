export interface SemilleroInterface {
  id?: number | null;
  id_prog_acad: number;
  id_docente: number;
  nombre: string;
  descripcion?: string | null;
  cupo: number;
  fecha_limite_inscripcion: Date;
  fecha_inicio: Date;
  fecha_fin: Date;
  cant_act_aprobatoria: number;
  estado: number;
  creado_en: Date;
  eliminado_en?: Date | null;
}
