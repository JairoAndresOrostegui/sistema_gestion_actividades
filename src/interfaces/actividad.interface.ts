export interface ActividadInterface {
  id?: number | null;
  id_semillero: number;
  nombre: string;
  descripcion?: string | null;
  url?: string | null;
  fecha_inicio: Date;
  fecha_fin: Date;
  estado: number;
  creado_en: Date;
  eliminado_en?: Date | null;
}
