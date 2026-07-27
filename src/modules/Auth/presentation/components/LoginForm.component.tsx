import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { useThemeContext } from "@/core/contexts/theme.context";
import { Link } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface LoginFormProps {
  email: string;
  password: string;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: VoidFunction;
}

export const LoginForm: FC<LoginFormProps> = ({
  email,
  onChangeEmail,
  onChangePassword,
  password,
  onSubmit,
}) => {
  const { palette } = useThemeContext();

  return (
    <View>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={[styles.subtitle, { color: palette.texts.secondary }]}>
        Inicia sesión para continuar
      </Text>
      <View style={styles.inputGroup}>
        <InputField
          label="Correo"
          placeholder="Ingresar correo"
          value={email}
          onChangeText={onChangeEmail}
        />
        <InputField
          label="Password"
          secureTextEntry
          placeholder="Ingresar contraseña"
          value={password}
          onChangeText={onChangePassword}
        />
      </View>
      <CustomButton title="Ingresar" onPress={onSubmit} />
      <View style={styles.signup}>
        <Text style={styles.signupText}>No tienes una cuenta?</Text>
        <Link
          href="/register"
          style={[styles.link, { color: palette.texts.link }]}
        >
          Registrarse
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  inputGroup: {
    gap: 30,
    marginBottom: 60,
  },
  signup: {
    marginTop: 30,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
  signupText: {
    fontWeight: "600",
  },
});
