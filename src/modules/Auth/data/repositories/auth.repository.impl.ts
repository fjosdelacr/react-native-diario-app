import { UserEntity } from "../../domain/entities/user.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { AuthRemoteDataSource } from "../data-sources/remote/auth.remote.ds";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authRemoteDataSource: AuthRemoteDataSource) {}

  async login(email: string, password: string): Promise<UserEntity> {
    try {
      const response = await this.authRemoteDataSource.login(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<UserEntity> {
    try {
      const response = await this.authRemoteDataSource.register(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

