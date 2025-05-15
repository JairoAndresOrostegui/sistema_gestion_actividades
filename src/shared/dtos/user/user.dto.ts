export interface UserDto {
  id: number;
  id_rol: number;
  id_programa_academico?: number | null;
  nombre_completo: string;
  correo_personal: string;
  correo_institucional: string;
  telefono: string;
  estado: number;
  creado_en: Date;
  token?: string | null;
}
