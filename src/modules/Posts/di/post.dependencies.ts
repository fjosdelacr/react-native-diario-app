import { PostRemoteDataSourceImpl } from "../data/data-sources/remote/post.remote.ds";
import { PostRepositoryImpl } from "../data/repositories/post.repository.impl";
import { GetPostsUseCase } from "../domain/use-cases/getPosts.use-case";

// Se instancian UNA sola vez cuando el módulo se importa por primera vez.
// Node/Metro cachea el módulo, así que las siguientes importaciones
// reutilizan las mismas instancias (comportamiento de singleton).

// Data sources
const postRemoteDataSource = new PostRemoteDataSourceImpl();

// Repositories
const postRepository = new PostRepositoryImpl(postRemoteDataSource);

// Use Cases
export const getPostUseCase = new GetPostsUseCase(postRepository);
