import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { useThemeContext } from "@/core/contexts/theme.context";

interface RegisterFormProps {
  email: string;
  password: string;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: VoidFunction;
}

export const RegisterForm: FC<RegisterFormProps> = ({
  email,
  password,
  onSubmit,
  onChangeEmail,
  onChangePassword,
}) => {
  const { palette } = useThemeContext();

  return (
    <View>
      <Text style={styles.title}>Crear Cuenta</Text>
      <Text style={[styles.subtitle, { color: palette.texts.secondary }]}>
        Registrate para continuar
      </Text>
      <View style={styles.inputGroup}>
        <InputField
          label="Correo"
          placeholder="Ingresar correo"
          value={email}
          onChangeText={onChangeEmail}
        />
        <InputField
          label="Contraseña"
          secureTextEntry
          placeholder="Ingresar contraseña"
          value={password}
          onChangeText={onChangePassword}
        />
        <InputField
          label="Confirmar Contraseña"
          secureTextEntry
          placeholder="Ingresar contraseña"
          value={password}
          onChangeText={onChangePassword}
        />
      </View>
      <CustomButton title="Registrarse" onPress={onSubmit} />
      <View style={styles.signin}>
        <Text style={styles.signinText}>Ya tienes una cuenta?</Text>
        <Link href="/" style={[styles.link, { color: palette.texts.link }]}>
          Inicia Sesión
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
  signin: {
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
  signinText: {
    fontWeight: "600",
  },
});
