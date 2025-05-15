export interface UserInterface {
  id?: number | null;
  id_rol: number;
  nombre_completo: string;
  correo_personal: string;
  correo_institucional: string;
  telefono: string;
  contrasena: string;
  estado: number;
  token_reseteo?: string | null;
  token_reseteo_expiracion?: number | null;
  creado_en: Date;
  eliminado_en?: Date | null;
}
