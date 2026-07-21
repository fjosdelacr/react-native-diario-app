import { useRouter } from "expo-router";

export const usePostList = () => {
  const router = useRouter();

  const handleAddPress = () => {
    router.push("/posts/new");
  };

  const handleEdit = (id: string) => {
    router.push(`/posts/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting post with id:", id);
  };

  return { handleAddPress, handleEdit, handleDelete };
};
