import CheckStockUseCase from "./check-stock.use-case";
import AddProductUseCase from "../add-product/add-product.use-case";
import Id from "../../../@shared/domain/value-object/id.value-object";
import Product from "../../domain/product.entity";

const product = new Product({
    id: new Id('1'),
    name: 'Product 1',
    description: 'Some description',
    purchasePrice: 100,
    stock: 10,
});

const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
    }
}

describe('Check stock use case unit test', () => {
    it('should check stock of product', async () => {
        const productRepository = MockRepository();
        const useCase = new CheckStockUseCase(productRepository);

        const input = {
            productId: '1'
        }
        const result = await useCase.execute(input);

        expect(productRepository.find).toHaveBeenCalled();
        expect(result.id).toBe(input.productId);
        expect(result.stock).toBe(10);
    })
})