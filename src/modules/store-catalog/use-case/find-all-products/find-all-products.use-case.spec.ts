import Product from "../../domain/product.entity";
import Id from "../../../@shared/domain/value-object/id.value-object";
import FindAllProductsUseCase from "./find-all-products.use-case";

const product1 = new Product({
    id: new Id('1'),
    name: 'Product 1',
    description: 'Some description',
    salesPrice: 100
});

const product2 = new Product({
    id: new Id('2'),
    name: 'Product 2',
    description: 'Some description',
    salesPrice: 200
});

const MockRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn().mockReturnValue(Promise.resolve([product1, product2]))
    }
}

describe("Find all products use case unit test", () => {
    it('should find all products', async () => {
        const productRepository = MockRepository();
        const useCase = new FindAllProductsUseCase(productRepository);

        const result = await useCase.execute();

        expect(productRepository.findAll).toHaveBeenCalled();
        expect(result.products).toHaveLength(2);
        expect(result.products[0].id).toBe("1");
        expect(result.products[0].name).toBe("Product 1");
        expect(result.products[0].description).toBe("Some description");
        expect(result.products[0].salesPrice).toBe(100);
        expect(result.products[1].id).toBe("2");
        expect(result.products[1].name).toBe("Product 2");
        expect(result.products[1].description).toBe("Some description");
        expect(result.products[1].salesPrice).toBe(200);
    })
})