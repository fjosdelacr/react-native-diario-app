import { BackgroundView } from "@/core/components/BackgroundView.component";
import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { openDatabaseAsync } from "expo-sqlite";
import { useState } from "react";

export const RegisterScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    const db = await openDatabaseAsync("store.db");
    await db.runAsync("INSERT INTO users (email, password) VALUES (?, ?)", [
      user.email,
      user.password,
    ]);
  };

  return (
    <BackgroundView style={{ gap: 20 }}>
      <InputField
        label="Correo"
        placeholder="Ingresar correo"
        onChangeText={(value) => handleChange("email", value)}
      />
      <InputField
        label="Contraseña"
        placeholder="Ingresar contraseña"
        secureTextEntry
        onChangeText={(value) => handleChange("password", value)}
      />
      <CustomButton title="Registrar" onPress={handleRegister} />
    </BackgroundView>
  );
};
