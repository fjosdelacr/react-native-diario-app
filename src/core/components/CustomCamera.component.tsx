import { CameraView } from "expo-camera";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef } from "react";

interface CustomCameraProps {
  onClose?: () => void;
  onTakePhoto?: (uri: string) => void;
}

export const CustomCamera = ({ onClose, onTakePhoto }: CustomCameraProps) => {
  const insets = useSafeAreaInsets();
  const cameraRef = useRef<CameraView>(null);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri && onTakePhoto) {
        onTakePhoto(photo.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing="front" />
      {onClose && (
        <View style={[styles.closeButtonContainer, { paddingTop: insets.top }]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>
        </View>
      )}
      <View style={[styles.buttonContainer, { paddingBottom: insets.bottom }]}>
        <TouchableOpacity style={styles.button} onPress={handleTakePicture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: 0,
  },
  button: {
    backgroundColor: "#ffffff",
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 10,
  },
  closeButton: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 24,
  },
});
