import { auth } from "@/config/firebase";
import { useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert } from "react-native";

export const useProfile = () => {
  const currentUser = auth.currentUser;
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const closeCamera = () => setShowCamera(false);

  const handlePressAvatar = async () => {
    if (!permission) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert("Permiso denegado");
        return;
      }
    }
    setShowCamera(true);
  };

  const takePhoto = async (uri: string) => {
    setPhotoUri(uri);
    setShowCamera(false);
  };

  const handleSaveChanges = async () => {
    if (!photoUri) {
      Alert.alert("Atención", "No has tomado ninguna foto nueva");
      return;
    }

    try {
      const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        Alert.alert("Error", "Faltan credenciales de Cloudinary en el .env");
        return;
      }

      const data = new FormData();
      data.append("file", {
        uri: photoUri,
        type: "image/jpeg",
        name: `profile_${Date.now()}.jpg`,
      } as any);

      data.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );

      const result = await response.json();

      if (result.secure_url) {
        console.log(
          "Foto subida a Cloudinary con éxito: ",
          result.secure_url,
          result,
        );
        Alert.alert("Éxito", "Foto guardada correctamente en Cloudinary");
        // TODO: Aquí puedes guardar result.secure_url en Firebase asociado al currentUser
      } else {
        console.error("Error al subir a Cloudinary: ", result);
        Alert.alert("Error", "No se pudo subir la foto a Cloudinary");
      }
    } catch (error) {
      console.error("Error en handleSaveChanges: ", error);
      Alert.alert("Error", "Ocurrió un error inesperado al subir la foto");
    }
  };

  return {
    photoUri,
    takePhoto,
    showCamera,
    currentUser,
    closeCamera,
    handlePressAvatar,
    handleSaveChanges,
  };
};
