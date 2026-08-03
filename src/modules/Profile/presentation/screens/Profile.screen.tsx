import { BackgroundView } from "@/core/components/BackgroundView.component";
import { StyleSheet, View, Modal } from "react-native";
import { ProfileCard } from "../components/ProfileCard.component";
import { Avatar } from "../components/Avatar.component";
import { CustomCamera } from "@/core/components/CustomCamera.component";
import { Header } from "@/core/components/Header.component";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useProfile } from "../hooks/useProfile";

export const ProfileScreen = () => {
  const {
    photoUri,
    takePhoto,
    showCamera,
    currentUser,
    closeCamera,
    handleSaveChanges,
    handlePressAvatar,
  } = useProfile();

  return (
    <BackgroundView>
      <Header
        title="Perfil"
        onPress={handleSaveChanges}
        icon={{
          name: "content-save-outline",
          component: MaterialCommunityIcons,
        }}
      />
      <View style={styles.avatarContainer}>
        <Avatar onPress={handlePressAvatar} uri={photoUri} />
      </View>
      <ProfileCard email={currentUser?.email ?? ""} />

      <Modal visible={showCamera} animationType="slide">
        <CustomCamera onClose={closeCamera} onTakePhoto={takePhoto} />
      </Modal>
    </BackgroundView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
