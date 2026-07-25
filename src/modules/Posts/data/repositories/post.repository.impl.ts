import { PostEntity } from "../../domain/entities/post.entity";
import { PostRepository } from "../../domain/repositories/post.repository";
import { PostRemoteDataSource } from "../data-sources/remote/post.remote.ds";

export class PostRepositoryImpl implements PostRepository {
  constructor(private readonly postRemoteDataSource: PostRemoteDataSource) {}

  async getPostList(): Promise<PostEntity[]> {
    try {
      const response = await this.postRemoteDataSource.getPosts();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
