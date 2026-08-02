import { ProductRemoteDataSourceImpl } from "../data/data-sources/remote/product.remote.ds";
import { PostRepositoryImpl } from "../data/repositories/product.repository.impl";
import { CreateProductUseCase } from "../domain/use-cases/createProduct.use-case";
import { DeleteProductUseCase } from "../domain/use-cases/deleteProduct.use-case";
import { GetProductsUseCase } from "../domain/use-cases/getProducts.use-case";
import { UpdateProductUseCase } from "../domain/use-cases/updateProduct.use-case";

/**
 * Se usan instancias singleton porque ProductRemoteDataSourceImpl no depende
 * de ningún contexto de React: su única dependencia es `fetch` (API global),
 * por lo que puede instanciarse directamente en el módulo en tiempo de carga.
 *
 * Esto contrasta con el módulo Auth, donde el data source necesita
 * `SQLiteDatabase` obtenida desde `useSQLiteContext()` (un hook de React que
 * solo puede llamarse dentro del árbol de componentes). Por esa razón, Auth
 * usa una factory function `createAuthDependencies(db)` en lugar de un singleton.
 */

// Data sources
const productRemoteDataSource = new ProductRemoteDataSourceImpl();

// Repositories
const productRepository = new PostRepositoryImpl(productRemoteDataSource);

// Use Cases
export const getProductUseCase = new GetProductsUseCase(productRepository);
export const createProductUseCase = new CreateProductUseCase(productRepository);
export const updateProductUseCase = new UpdateProductUseCase(productRepository);
export const deleteProductUseCase = new DeleteProductUseCase(productRepository);
