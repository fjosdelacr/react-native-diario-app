import { BackgroundView } from "@/core/components/BackgroundView.component";
import { useThemeContext } from "@/core/contexts/theme.context";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { RegisterForm } from "../components/RegisterForm.component";
import { useRegister } from "../hooks/useRegister.hook";

export const RegisterScreen = () => {
  const { palette } = useThemeContext();
  const { user, handleChange, handleRegister } = useRegister();

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
