import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../use-case/add-product/add-product.use-case";
import ProductAdminFacade from "../facade/product-admin.facade";

export default class ProductAdminFacadeFactory {
    static create() {
        const productRepository = new ProductRepository();
        const addProductUseCase = new AddProductUseCase(productRepository);
        const productFacade = new ProductAdminFacade({addUseCase: addProductUseCase, stockUseCase: undefined});

        return productFacade;
    }
}