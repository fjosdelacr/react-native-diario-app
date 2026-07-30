import { BackgroundView } from "@/core/components/BackgroundView.component";
import { useThemeContext } from "@/core/contexts/theme.context";
import { openDatabaseAsync } from "expo-sqlite";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { RegisterForm } from "../components/RegisterForm.component";

export const RegisterScreen = () => {
  const { palette } = useThemeContext();
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: palette.colors.primary.light,
          paddingTop: 150,
        }}
        onPress={Keyboard.dismiss}
      >
        <BackgroundView style={{ paddingTop: 50 }}>
          <RegisterForm
            email={user.email}
            password={user.password}
            onSubmit={handleRegister}
            onChangeEmail={(value) => handleChange("email", value)}
            onChangePassword={(value) => handleChange("password", value)}
          />
        </BackgroundView>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
