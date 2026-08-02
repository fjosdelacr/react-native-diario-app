import { ProductEntity } from "@/modules/Products/domain/entities/product.entity";
import { ProductDtoResponse } from "../../dtos/product.dto";
import { ProductModel } from "../../models/product.model";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, firebaseDB } from "@/config/firebase";

export interface ProductRemoteDataSource {
  getProducts: () => Promise<ProductModel[]>;
  createProduct: (post: ProductEntity) => Promise<ProductModel>;
  updateProduct: (post: ProductEntity) => Promise<ProductModel>;
  deleteProduct: (id: string) => Promise<ProductModel>;
}

export class ProductRemoteDataSourceImpl implements ProductRemoteDataSource {
  private get currentUser() {
    return auth.currentUser?.uid;
  }

  async getProducts() {
    try {
      const q = query(
        collection(firebaseDB, "products"),
        where("ownerId", "==", this.currentUser),
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<ProductDtoResponse, "id">;
        return ProductModel.fromDTO({
          id: doc.id,
          ...data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async createProduct(product: ProductEntity) {
    try {
      const model = ProductModel.fromEntity(product);
      const dto = model.toDTO();
      const docRef = await addDoc(collection(firebaseDB, "products"), {
        ...dto,
        ownerId: this.currentUser,
      });
      return new ProductModel(dto.title, dto.description, docRef.id);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(post: ProductEntity) {
    try {
      const model = ProductModel.fromEntity(post);
      const dto = model.toDTO();
      if (!post.id) {
        throw new Error("Product ID is required");
      }
      const productRef = doc(firebaseDB, "products", post.id);
      await updateDoc(productRef, { ...dto });
      return new ProductModel(dto.title, dto.description, post.id);
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: string): Promise<ProductModel> {
    try {
      const productRef = doc(firebaseDB, "products", id);
      await deleteDoc(productRef);
      return new ProductModel("", "", id);
    } catch (error) {
      throw error;
    }
  }
}
