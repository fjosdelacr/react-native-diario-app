import { Background } from "@/core/components/Background.component";
import { PostFormHeader } from "../components/PostFormHeader.component";
import { PostForm } from "../components/PostForm.component";

export const EditPostScreen = () => {
  return (
    <Background>
      <PostFormHeader title="Editar publicación" />
      <PostForm />
    </Background>
  );
};
