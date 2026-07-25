import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { FC } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface PostFormProps {
  title?: string;
  message?: string;
  onPost: () => void;
  disabled?: boolean;
  loading?: boolean;
  onChangeTitle: (title: string) => void;
  onChangeMessage: (message: string) => void;
}

export const PostForm: FC<PostFormProps> = ({
  title,
  onPost,
  message,
  loading,
  disabled,
  onChangeTitle,
  onChangeMessage,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <InputField
              onChangeText={onChangeTitle}
              value={title}
              label="Título"
              placeholder="Escribe un título"
            />
            <InputField
              value={message}
              onChangeText={onChangeMessage}
              label="Mensaje"
              placeholder="¿Qué está pasando?"
              multiline
              numberOfLines={600}
              textAlignVertical="top"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CustomButton
              title={loading ? "Cargando..." : "Publicar"}
              onPress={onPost}
              disabled={disabled}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  formContainer: {
    gap: 24,
  },
});
