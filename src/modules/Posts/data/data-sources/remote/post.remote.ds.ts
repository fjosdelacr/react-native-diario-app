import { PostEntity } from "@/modules/Posts/domain/entities/post.entity";
import { PostDtoResponse } from "../../dtos/post.dto";
import { PostModel } from "../../models/post.model";

export interface PostRemoteDataSource {
  getPosts: () => Promise<PostModel[]>;
  createPost: (post: PostEntity) => Promise<PostModel>;
  updatePost: (post: PostEntity) => Promise<PostModel>;
}

export class PostRemoteDataSourceImpl implements PostRemoteDataSource {
  async getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const json = (await response.json()) as PostDtoResponse[];
      return json.map((post) => PostModel.fromDTO(post));
    } catch (error) {
      throw error;
    }
  }

  async createPost(post: PostEntity) {
    try {
      const model = PostModel.fromEntity(post);
      const dto = model.toDTO();
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(dto),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const json = (await response.json()) as PostDtoResponse;
      return PostModel.fromDTO(json);
    } catch (error) {
      throw error;
    }
  }

  async updatePost(post: PostEntity) {
    try {
      const model = PostModel.fromEntity(post);
      const dto = model.toDTO();
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          body: JSON.stringify(dto),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const json = (await response.json()) as PostDtoResponse;
      return PostModel.fromDTO(json);
    } catch (error) {
      throw error;
    }
  }
}
