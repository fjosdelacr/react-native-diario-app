import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { UserModel } from "../../models/user.model";

export interface AuthRemoteDataSource {
  login: (email: string, password: string) => Promise<UserModel>;
  register: (email: string, password: string) => Promise<UserModel>;
}

export class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
  async login(email: string, password: string): Promise<UserModel> {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return UserModel.fromRemoteDTO({
        uid: credential.user.uid,
        email: credential.user.email ?? "",
      });
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<UserModel> {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return UserModel.fromRemoteDTO({
        uid: credential.user.uid,
        email: credential.user.email ?? "",
      });
    } catch (error) {
      throw error;
    }
  }
}
