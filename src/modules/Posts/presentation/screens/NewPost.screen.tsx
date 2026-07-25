import { PostFormHeader } from "../components/PostFormHeader.component";
import { PostForm } from "../components/PostForm.component";
import { Background } from "@/core/components/Background.component";

export const NewPostScreen = () => {
  return (
    <Background>
      <PostFormHeader title="Crear publicación" />
      <PostForm />
    </Background>
  );
};
