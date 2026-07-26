import {
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { LoginForm } from "../components/LoginForm.component";
import { BackgroundView } from "@/core/components/BackgroundView.component";
import { useThemeContext } from "@/core/contexts/theme.context";

export const LoginScreen = () => {
  const { palette } = useThemeContext();

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
          <LoginForm />
        </BackgroundView>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
