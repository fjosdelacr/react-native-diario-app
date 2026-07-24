import { Background } from "@/core/components/Background.component";
import { PostFormHeader } from "../components/PostFormHeader.component";
import { InputField } from "@/core/components/InputField.components";
import { PostForm } from "../components/PostForm.component";

export const NewPostScreen = () => {
  return (
    <Background>
      <PostFormHeader title="Crear publicación" />
      <PostForm />
    </Background>
  );
};
