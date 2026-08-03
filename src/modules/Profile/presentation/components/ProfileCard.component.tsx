import { useThemeContext } from "@/core/contexts/theme.context";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProfileCardProps {
  email: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ email }) => {
  const { palette } = useThemeContext();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.colors.surface,
          ...palette.shadows.sm,
        },
      ]}
    >
      <View style={styles.infoWrapper}>
        <Text style={styles.label}>Correo</Text>
        <Text style={styles.info}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontWeight: "bold",
  },
  info: {
    fontWeight: "normal",
  },
});
