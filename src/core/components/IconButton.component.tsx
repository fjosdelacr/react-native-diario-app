import { ICON_SIZES } from "@/utils/constants.util";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { Pressable, StyleSheet } from "react-native";
import { useThemeContext } from "../contexts/theme.context";

interface IconButtonProps<G extends string, FN extends string> {
  icon: Icon<G, FN>;
  name: G;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "error";
  onPress?: VoidFunction;
}

export const IconButton = <G extends string, FN extends string>({
  icon: IconComponent,
  name,
  onPress,
  size = "md",
  color = "primary",
}: IconButtonProps<G, FN>) => {
  const { palette } = useThemeContext();
  const iconColor = {
    primary: palette.colors.primary.default,
    success: palette.colors.success,
    error: palette.colors.error,
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? palette.colors.overlay : undefined,
        },
      ]}
      onPress={onPress}
    >
      <IconComponent
        name={name}
        size={ICON_SIZES[size]}
        color={iconColor[color]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    padding: 8,
  },
});
