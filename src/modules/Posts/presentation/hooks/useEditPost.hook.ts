import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { PostEntity } from "../../domain/entities/post.entity";
import { updatePostUseCase } from "../../di/post.dependencies";

const DATA_STATES_DEFAULT = {
  isLoading: false,
  isError: false,
  data: null,
};

interface DataStates {
  isLoading: boolean;
  isError: boolean;
  data: PostEntity | null;
}

export const useEditPost = () => {
  const router = useRouter();
  const params = useLocalSearchParams() as unknown as PostEntity;
  const [post, setPost] = useState({
    userId: params.userId,
    id: params.id,
    title: params.title,
    message: params.message,
  });
  const [dataStates, setDataStates] = useState<DataStates>(DATA_STATES_DEFAULT);

  const onChangeTitle = (title: string) => {
    setPost({
      ...post,
      title,
    });
  };

  const onChangeMessage = (message: string) => {
    setPost({
      ...post,
      message,
    });
  };

  const handlePost = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });
    try {
      const result = await updatePostUseCase.execute(post);
      router.push("/posts");
      setDataStates({ ...DATA_STATES_DEFAULT, data: result });
    } catch (error) {
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });
    }
  };

  return { handlePost, post, onChangeTitle, onChangeMessage, dataStates };
};
