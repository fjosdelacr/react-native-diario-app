import { SQLiteDatabase } from "expo-sqlite";
import { AuthLocalDataSourceImpl } from "../data/data-sources/local/auth.local.ds";
import { AuthRepositoryImpl } from "../data/repositories/auth.repository.impl";
import { LoginUseCase } from "../domain/use-cases/login.use-case";
import { RegisterUseCase } from "../domain/use-cases/register.use-case";

/**
 * Factory function en lugar de singleton, ya que la instancia `db` de SQLite
 * se obtiene del contexto de React (useSQLiteContext) y debe inyectarse
 * en tiempo de ejecución desde los hooks de presentación.
 */
export const createAuthDependencies = (db: SQLiteDatabase) => {
  // Data sources
  const authLocalDataSource = new AuthLocalDataSourceImpl(db);

  // Repositories
  const authRepository = new AuthRepositoryImpl(authLocalDataSource);

  // Use Cases
  const loginUseCase = new LoginUseCase(authRepository);
  const registerUseCase = new RegisterUseCase(authRepository);

  return { loginUseCase, registerUseCase };
};
