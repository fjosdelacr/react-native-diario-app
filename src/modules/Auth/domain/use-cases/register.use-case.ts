import { UserEntity } from "../entities/user.entity";
import { AuthRepository } from "../repositories/auth.repository";

export class RegisterUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<UserEntity> {
    const result = await this.authRepository.register(email, password);
    return result;
  }
}
