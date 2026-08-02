import { useState } from "react";
import { useRouter } from "expo-router";
import { loginUseCase } from "../../di/auth.dependencies";
import { UserEntity } from "../../domain/entities/user.entity";
import { Alert } from "react-native";

const DATA_STATES_DEFAULT = {
  isLoading: false,
  isError: false,
  data: null,
};

interface DataStates {
  isLoading: boolean;
  isError: boolean;
  data: UserEntity | null;
}

export const useLogin = () => {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });
  const [dataStates, setDataStates] = useState<DataStates>(DATA_STATES_DEFAULT);

  const handleChange = (field: "email" | "password", value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });
    try {
      const result = await loginUseCase.execute(user.email, user.password);
      console.log("login", result);
      if (result) {
        setDataStates({ ...DATA_STATES_DEFAULT, data: result });
        router.replace("/products");
      }
    } catch (error: any) {
      Alert.alert("Error", error?.message ?? "Error al iniciar sesión");
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });
    }
  };

  return {
    user,
    dataStates,
    handleChange,
    handleLogin,
  };
};
