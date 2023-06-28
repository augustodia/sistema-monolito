import {Sequelize} from "sequelize-typescript";
import {ProductModel} from "./product.model";
import Product from "../domain/product.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import ProductRepository from "./product.repository";

describe('ProductRepository', function () {
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
        const productProps = {
            id: new Id('123'),
            name: 'Product 1',
            description: 'Some description',
            purchasePrice: 100,
            stock: 10,
        }

        const product = new Product(productProps);
        const productRepository = new ProductRepository();
        const result = await productRepository.add(product);

        const productDB = await ProductModel.findOne({
            where: {id: productProps.id.id},
        })

        expect(productProps.id.id).toEqual(productDB.id);
        expect(productProps.name).toEqual(productDB.name);
        expect(productProps.description).toEqual(productDB.description);
        expect(productProps.purchasePrice).toEqual(productDB.purchasePrice);
        expect(productProps.stock).toEqual(productDB.stock);
    });

    it('should find a product', async () => {
        const productRepository = new ProductRepository();

        const productToDB = {
            id: "1",
            name: "Product 1",
            description: "Some description",
            purchasePrice: 100,
            stock: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        await ProductModel.create(productToDB);

        const product = await productRepository.find("1");

        expect(product.id.id).toEqual(productToDB.id);
        expect(product.name).toEqual(productToDB.name);
        expect(product.description).toEqual(productToDB.description);
        expect(product.purchasePrice).toEqual(productToDB.purchasePrice);
        expect(product.stock).toEqual(productToDB.stock);
    })
});