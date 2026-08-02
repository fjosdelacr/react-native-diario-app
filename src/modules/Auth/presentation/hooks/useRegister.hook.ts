import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { createAuthDependencies } from "../../di/auth.dependencies";
import { UserEntity } from "../../domain/entities/user.entity";

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

export const useRegister = () => {
  const db = useSQLiteContext();
  const { registerUseCase } = createAuthDependencies(db);

  const [user, setUser] = useState({ email: "", password: "" });
  const [dataStates, setDataStates] = useState<DataStates>(DATA_STATES_DEFAULT);

  const handleChange = (field: "email" | "password", value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });
    try {
      const result = await registerUseCase.execute(user.email, user.password);
      if (result) {
        setDataStates({ ...DATA_STATES_DEFAULT, data: result });
      }
    } catch (error) {
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });
    }
  };

  return {
    user,
    dataStates,
    handleChange,
    handleRegister,
  };
};
