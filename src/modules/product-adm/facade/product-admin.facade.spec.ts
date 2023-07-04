import {Sequelize} from "sequelize-typescript";
import {ProductModel} from "../repository/product.model";
import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../use-case/add-product/add-product.use-case";
import ProductAdminFacade from "./product-admin.facade";
import ProductAdminFacadeFactory from "../factory/facade.factory";

describe('ProductAdminFacade', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: {force: true},
        })

        await sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it('should create a product', async () => {
        const productFacade = ProductAdminFacadeFactory.create();

        const input = {
            id: '1',
            name: 'Product 1',
            description: 'Some description',
            purchasePrice: 10,
            stock: 10,
        }

        await productFacade.addProduct(input);

        const product = await ProductModel.findOne({where: {id: '1'}});

        expect(product).toBeDefined();
        expect(product.id).toBe(input.id);
        expect(product.name).toBe(input.name);
        expect(product.description).toBe(input.description);
        expect(product.purchasePrice).toBe(input.purchasePrice);
        expect(product.stock).toBe(input.stock);
    })
})