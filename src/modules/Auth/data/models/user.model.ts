import { UserEntity } from "../../domain/entities/user.entity";
import { UserDtoLocalResponse } from "../dtos/user.local.dto";
import { UserRemoteDtoResponse } from "../dtos/user.remote.dto";

export class UserModel implements UserEntity {
  constructor(
    public email: string,
    public id?: string,
  ) {}

  static fromLocalDTO(dto: UserDtoLocalResponse): UserModel {
    return new UserModel(dto.email, dto.id.toString());
  }

  static fromRemoteDTO(dto: UserRemoteDtoResponse): UserModel {
    return new UserModel(dto.email, dto.uid);
  }

  static fromEntity(entity: UserEntity): UserModel {
    return new UserModel(entity.email, entity.id);
  }
}
