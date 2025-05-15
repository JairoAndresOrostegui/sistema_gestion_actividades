export interface AcaProgInterface {
  id?: number | null;
  id_director: number;
  nombre: string;
  estado: number;
  creado_en: Date;
  eliminado_en?: Date | null;
}
