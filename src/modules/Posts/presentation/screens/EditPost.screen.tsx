import { Background } from "@/core/components/Background.component";
import { PostFormHeader } from "../components/PostFormHeader.component";
import { PostForm } from "../components/PostForm.component";
import { useEditPost } from "../hooks/useEditPost.hook";

export const EditPostScreen = () => {
  const { handlePost, onChangeMessage, onChangeTitle, post, dataStates } =
    useEditPost();

  return (
    <Background>
      <PostFormHeader title="Editar publicación" />
      <PostForm
        title={post.title}
        onPost={handlePost}
        message={post.message}
        onChangeTitle={onChangeTitle}
        loading={dataStates.isLoading}
        disabled={dataStates.isLoading}
        onChangeMessage={onChangeMessage}
      />
    </Background>
  );
};
