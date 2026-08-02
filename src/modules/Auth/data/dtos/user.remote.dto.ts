/**
 * Refleja los campos relevantes del objeto `User` que devuelve Firebase Auth
 * tras un signIn o createUser. Se usa para desacoplar el dominio del SDK
 * de Firebase — si Firebase cambia su estructura, solo se actualiza este DTO
 * y el mapeo en UserModel, sin tocar las capas de dominio ni presentación.
 */
export interface UserRemoteDtoResponse {
  uid: string;
  email: string;
}
