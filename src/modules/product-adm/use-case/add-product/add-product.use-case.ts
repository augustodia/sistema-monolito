import {AddProductInputDto, AddProductOutputDto} from "./add-product.dto";
import Product from "../../domain/product.entity";
import Id from "../../../@shared/domain/value-object/id.value-object";
import ProductGateway from "../../gateway/product.gateway";
import UseCaseInterface from "../../../@shared/use-case/use-case.interface";

export default class AddProductUseCase implements UseCaseInterface {
    private _productRepository: ProductGateway;

    constructor(productRepository: ProductGateway) {
        this._productRepository = productRepository;
    }

    async execute(input: AddProductInputDto): Promise<AddProductOutputDto> {
        const props = {
            ...input,
            id: new Id(input.id),
        }

        const product = new Product(props);

        await this._productRepository.add(product);

        return {
            id: product.id.id,
            name: product.name,
            description: product.description,
            purchasePrice: product.purchasePrice,
            stock: product.stock,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        };
    }
}