import { BackgroundView } from "@/core/components/BackgroundView.component";
import { ProductFormHeader } from "../components/ProductFormHeader.component";
import { ProductForm } from "../components/ProductForm.component";
import { useEditProduct } from "../hooks/useEditProduct.hook";

export const EditProductScreen = () => {
  const { handleSubmit, onChangeMessage, onChangeTitle, product, dataStates } =
    useEditProduct();

  return (
    <BackgroundView>
      <ProductFormHeader title="Editar producto" />
      <ProductForm
        title={product.title}
        onSubmit={handleSubmit}
        onChangeTitle={onChangeTitle}
        loading={dataStates.isLoading}
        disabled={dataStates.isLoading}
        description={product.description}
        onChangeMessage={onChangeMessage}
      />
    </BackgroundView>
  );
};
