import {
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { LoginForm } from "../components/LoginForm.component";
import { BackgroundView } from "@/core/components/BackgroundView.component";
import { useThemeContext } from "@/core/contexts/theme.context";
import { openDatabaseAsync } from "expo-sqlite";
import { useState } from "react";
import { useRouter } from "expo-router";

export const LoginScreen = () => {
  const router = useRouter();
  const { palette } = useThemeContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    const db = await openDatabaseAsync("store.db");
    const userFounded = await db.getFirstAsync(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [user.email, user.password],
    );

    if (userFounded) {
      router.navigate("/products");
    }
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
          <LoginForm
            email={user.email}
            password={user.password}
            onChangeEmail={(value) => handleChange("email", value)}
            onChangePassword={(value) => handleChange("password", value)}
            onSubmit={handleLogin}
          />
        </BackgroundView>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
