import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useThemeContext } from "@/core/contexts/theme.context";

export default function TabsLayout() {
  const { palette } = useThemeContext();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.colors.primary.dark,
        // tabBarInactiveTintColor: palette.colors.border,
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarLabel: "Productos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Configuración",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
