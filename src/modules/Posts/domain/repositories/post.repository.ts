import { PostEntity } from "../entities/post.entity";

export interface PostRepository {
  getPostList: () => Promise<PostEntity[]>;
  createPost: (post: PostEntity) => Promise<PostEntity>;
  updatePost: (post: PostEntity) => Promise<PostEntity>;
}
