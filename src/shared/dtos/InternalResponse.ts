export interface InternalResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}
