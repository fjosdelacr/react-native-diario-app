import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { PostRepositoryImpl } from "../../data/repositories/post.repository.impl";
import { getPostUseCase } from "../../di/post.dependencies";
import { PostEntity } from "../../domain/entities/post.entity";

const DATA_STATES_DEFAULT = {
  isLoading: false,
  isError: false,
  data: [],
};

interface DataStates {
  isLoading: boolean;
  isError: boolean;
  data: PostEntity[];
}

export const usePostList = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [dataStates, setDataStates] = useState<DataStates>(DATA_STATES_DEFAULT);
  const router = useRouter();

  const hiddenModal = () => setIsVisibleModal(false);
  const showModal = () => setIsVisibleModal(true);

  const handleAddPress = () => {
    router.push("/posts/new");
  };

  const handleEdit = (id: string) => {
    router.push(`/posts/${id}`);
  };

  const handleDelete = (id: string) => {
    showModal();
  };

  const confirmDelete = () => {
    console.log("Deleting post with id:");
    hiddenModal();
  };

  const loadData = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });
    try {
      const result = await getPostUseCase.execute();
      setDataStates({ ...DATA_STATES_DEFAULT, data: result });
    } catch (error) {
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    dataStates,
    handleAddPress,
    handleEdit,
    handleDelete,
    isVisibleModal,
    confirmDelete,
    hiddenModal,
  };
};
