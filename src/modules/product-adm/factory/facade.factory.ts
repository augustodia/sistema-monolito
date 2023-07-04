import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../use-case/add-product/add-product.use-case";
import ProductAdminFacade from "../facade/product-admin.facade";
import CheckStockUseCase from "../use-case/check-stock/check-stock.use-case";

export default class ProductAdminFacadeFactory {
    static create() {
        const productRepository = new ProductRepository();
        const addProductUseCase = new AddProductUseCase(productRepository);
        const checkStockUseCase = new CheckStockUseCase(productRepository);
        const productFacade = new ProductAdminFacade(
            {
                addUseCase: addProductUseCase, stockUseCase: checkStockUseCase
            });

        return productFacade;
    }
}