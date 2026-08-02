import { UserEntity } from "../../domain/entities/user.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { AuthLocalDataSource } from "../data-sources/local/auth.local.ds";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authLocalDataSource: AuthLocalDataSource) {}

  async login(email: string, password: string): Promise<UserEntity> {
    try {
      const response = await this.authLocalDataSource.login(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<UserEntity> {
    try {
      const response = await this.authLocalDataSource.register(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
