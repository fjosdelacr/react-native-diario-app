import { useThemeContext } from "@/core/contexts/theme.context";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface SettingItemProps {
  title: string;
  onPress: () => void;
}

export const SettingItem: FC<SettingItemProps> = ({ title, onPress }) => {
  const { palette } = useThemeContext();
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: palette.colors.surface,
            ...palette.shadows.sm,
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
