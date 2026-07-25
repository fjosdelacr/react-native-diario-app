import { PostEntity } from "../../domain/entities/post.entity";
import { PostDtoResponse } from "../dtos/post.dto";

export class PostModel implements PostEntity {
  constructor(
    public userId: number,
    public title: string,
    public message: string,
    public id?: number,
  ) {}

  static fromDTO(dto: PostDtoResponse): PostModel {
    return new PostModel(dto.userId, dto.title, dto.body, dto.id);
  }

  toDTO(): PostDtoResponse {
    return {
      userId: this.userId,
      id: this.id,
      title: this.title,
      body: this.message,
    };
  }
}
