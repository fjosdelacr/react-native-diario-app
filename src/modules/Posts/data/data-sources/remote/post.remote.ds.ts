import { PostDtoResponse } from "../../dtos/post.dto";
import { PostModel } from "../../models/post.model";

export interface PostRemoteDataSource {
  getPosts: () => Promise<PostModel[]>;
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
}
