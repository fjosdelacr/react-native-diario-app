import { PostRemoteDataSourceImpl } from "../data/data-sources/remote/post.remote.ds";
import { PostRepositoryImpl } from "../data/repositories/post.repository.impl";
import { CreatePostUseCase } from "../domain/use-cases/createPost.use-case";
import { GetPostsUseCase } from "../domain/use-cases/getPosts.use-case";
import { UpdatePostUseCase } from "../domain/use-cases/updatePost.use-case";

// Se instancian UNA sola vez cuando el módulo se importa por primera vez.
// Node/Metro cachea el módulo, así que las siguientes importaciones
// reutilizan las mismas instancias (comportamiento de singleton).

// Data sources
const postRemoteDataSource = new PostRemoteDataSourceImpl();

// Repositories
const postRepository = new PostRepositoryImpl(postRemoteDataSource);

// Use Cases
export const getPostUseCase = new GetPostsUseCase(postRepository);
export const createPostUseCase = new CreatePostUseCase(postRepository);
export const updatePostUseCase = new UpdatePostUseCase(postRepository);
