import { AuthRemoteDataSourceImpl } from "../data/data-sources/remote/auth.remote.ds";
import { AuthRepositoryImpl } from "../data/repositories/auth.repository.impl";
import { LoginUseCase } from "../domain/use-cases/login.use-case";
import { RegisterUseCase } from "../domain/use-cases/register.use-case";

/**
 * Instancias singleton para Auth usando Firebase Auth (remote data source).
 * Al no depender de hooks de React (como useSQLiteContext), se instancian
 * directamente en tiempo de carga siguiendo el mismo patrón que Products.
 */
// Data sources
const authRemoteDataSource = new AuthRemoteDataSourceImpl();

// Repositories
const authRepository = new AuthRepositoryImpl(authRemoteDataSource);

// Use Cases
export const loginUseCase = new LoginUseCase(authRepository);
export const registerUseCase = new RegisterUseCase(authRepository);
