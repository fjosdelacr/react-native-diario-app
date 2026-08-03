import { FC } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AvatarProps {
  onPress: () => void;
  uri?: string | null;
}

export const Avatar: FC<AvatarProps> = ({ onPress, uri }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <Ionicons name="person" size={100} color="white" />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "#cccccc",
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
