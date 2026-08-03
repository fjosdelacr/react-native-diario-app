import { FilledIconButton } from "@/core/components/FilledIconButton";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "@expo/vector-icons/build/createIconSet";

interface HeaderIcon<G extends string, FN extends string> {
  component: Icon<G, FN>;
  name: G;
}

interface HeaderProps<G extends string, FN extends string> {
  title: string;
  onPress?: () => void;
  icon?: HeaderIcon<G, FN>;
}

export const Header = <G extends string, FN extends string>({
  title,
  icon,
  onPress,
}: HeaderProps<G, FN>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {icon && (
        <FilledIconButton
          icon={icon.component}
          name={icon.name}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    height: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
