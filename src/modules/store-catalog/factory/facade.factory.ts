import ProductRepository from "../repository/product.repository";
import FindProductUseCase from "../use-case/find-product/find-product.use-case";
import FindAllProductsUseCase from "../use-case/find-all-products/find-all-products.use-case";
import StoreCatalogFacade from "../facade/store-catalog.facade";

export default class StoreCatalogFacadeFactory {
    static create(): StoreCatalogFacade {
        const productRepository = new ProductRepository();
        const findUseCase = new FindProductUseCase(productRepository);
        const findAllUseCase = new FindAllProductsUseCase(productRepository);

        return new StoreCatalogFacade({
            findUseCase: findUseCase,
            findAllUseCase: findAllUseCase,
        })
    }
}