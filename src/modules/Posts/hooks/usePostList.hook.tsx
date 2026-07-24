import { useRouter } from "expo-router";
import { useState } from "react";

export const usePostList = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
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

  return {
    handleAddPress,
    handleEdit,
    handleDelete,
    isVisibleModal,
    confirmDelete,
    hiddenModal,
  };
};
