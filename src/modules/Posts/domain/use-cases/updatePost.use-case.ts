import { PostEntity } from "../entities/post.entity";
import { PostRepository } from "../repositories/post.repository";

export class UpdatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(post: PostEntity): Promise<PostEntity> {
    const posts = await this.postRepository.updatePost(post);
    return posts;
  }
}
