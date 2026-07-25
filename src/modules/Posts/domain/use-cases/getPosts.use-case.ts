import { PostEntity } from "../entities/post.entity";
import { PostRepository } from "../repositories/post.repository";

export class GetPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<PostEntity[]> {
    const posts = await this.postRepository.getPostList();
    // AQUÍ VA LA LÓGICA DE NEGOCIO:
    // Por ejemplo, filtrar solo los posts activos o ordenarlos por fecha
    return posts;
  }
}
