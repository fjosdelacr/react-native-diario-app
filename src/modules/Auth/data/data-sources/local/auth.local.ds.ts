import { SQLiteDatabase } from "expo-sqlite";
import { UserDtoLocalResponse } from "../../dtos/user.local.dto";
import { UserModel } from "../../models/user.model";

export interface AuthLocalDataSource {
  login: (email: string, password: string) => Promise<UserModel>;
  register: (email: string, password: string) => Promise<UserModel>;
}

export class AuthLocalDataSourceImpl implements AuthLocalDataSource {
  constructor(private readonly db: SQLiteDatabase) {}

  async login(email: string, password: string): Promise<UserModel> {
    try {
      const row = await this.db.getFirstAsync<UserDtoLocalResponse>(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
      );

      if (!row) {
        throw new Error("Credenciales incorrectas");
      }

      return UserModel.fromLocalDTO(row);
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<UserModel> {
    try {
      const result = await this.db.runAsync(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password],
      );

      return new UserModel(email, result.lastInsertRowId.toString());
    } catch (error) {
      throw error;
    }
  }
}
