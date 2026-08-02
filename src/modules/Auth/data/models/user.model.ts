import { UserEntity } from "../../domain/entities/user.entity";
import { UserDtoLocal } from "../dtos/user.dto";

export class UserModel implements UserEntity {
  constructor(
    public email: string,
    public password: string,
    public id?: number,
  ) {}

  static fromDTO(dto: UserDtoLocal): UserModel {
    return new UserModel(dto.email, dto.password, dto.id);
  }

  static fromEntity(entity: UserEntity): UserModel {
    return new UserModel(entity.email, entity.password, entity.id);
  }

  toDTO(): UserDtoLocal {
    return {
      id: this.id ?? 0,
      email: this.email,
      password: this.password,
    };
  }
}
