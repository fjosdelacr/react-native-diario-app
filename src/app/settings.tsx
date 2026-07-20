import { useThemeContext } from "@/core/contexts/theme.context";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsTab() {
  const { palette } = useThemeContext();

  return (
    <View
      style={[styles.container, { backgroundColor: palette.colors.background }]}
    >
      <Text>Tab Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
