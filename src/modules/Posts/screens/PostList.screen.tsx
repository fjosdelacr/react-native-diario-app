import { FlatList } from "react-native";
import { Background } from "@/core/components/Background.component";
import { PostCard } from "../components/PostCard.component";
import { PostHeader } from "../components/PostHeader.component";
import { usePostList } from "../hooks/usePostList.hook";
import { CustomModal } from "@/core/components/CustomModal.component";

export const PostListScreen = () => {
  const {
    handleAddPress,
    handleDelete,
    handleEdit,
    isVisibleModal,
    confirmDelete,
    hiddenModal,
  } = usePostList();

  const renderItem = ({ item }: any) => {
    return (
      <PostCard
        title={item.title}
        description={item.description}
        onEdit={() => handleEdit(item.id)}
        onDelete={() => handleDelete(item.id)}
      />
    );
  };

  return (
    <>
      <Background>
        <PostHeader title="Mi Lista" onAddPress={handleAddPress} />
        <FlatList
          data={[
            { id: 1, title: "Título 1", description: "Descripción 1" },
            { id: 2, title: "Título 2", description: "Descripción 2" },
            { id: 3, title: "Título 3", description: "Descripción 3" },
            { id: 4, title: "Título 4", description: "Descripción 4" },
            { id: 5, title: "Título 5", description: "Descripción 5" },
            { id: 6, title: "Título 6", description: "Descripción 6" },
          ]}
          renderItem={renderItem}
          contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </Background>
      <CustomModal
        visible={isVisibleModal}
        title={`¿Desea eliminar titulo?`}
        message="Al eliminar el titulo no podra ser recuperado"
        onCancel={hiddenModal}
        onConfirm={confirmDelete}
      />
    </>
  );
};
