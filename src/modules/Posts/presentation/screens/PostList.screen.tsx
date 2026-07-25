import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View,
} from "react-native";
import { Background } from "@/core/components/Background.component";
import { PostCard } from "../components/PostCard.component";
import { PostHeader } from "../components/PostHeader.component";
import { usePostList } from "../hooks/usePostList.hook";
import { CustomModal } from "@/core/components/CustomModal.component";
import { useThemeContext } from "@/core/contexts/theme.context";
import { PostEntity } from "../../domain/entities/post.entity";

export const PostListScreen = () => {
  const {
    dataStates,
    handleAddPress,
    handleDelete,
    handleEdit,
    isVisibleModal,
    confirmDelete,
    hiddenModal,
  } = usePostList();
  const { palette } = useThemeContext();

  const renderItem = ({ item }: ListRenderItemInfo<PostEntity>) => {
    return (
      <PostCard
        title={item.title}
        message={item.message}
        onEdit={() => handleEdit(item.id?.toString() ?? "")}
        onDelete={() => handleDelete(item.id?.toString() ?? "")}
      />
    );
  };

  if (dataStates.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size={"large"}
          color={palette.colors.primary.default}
        />
      </View>
    );
  }

  return (
    <>
      <Background>
        <PostHeader title="Mi Lista" onAddPress={handleAddPress} />
        <FlatList
          data={dataStates.data}
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
