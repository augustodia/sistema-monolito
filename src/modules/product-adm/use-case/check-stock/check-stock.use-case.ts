import {CheckStockInputDto, CheckStockOutputDto} from "./check-stock.dto";
import ProductGateway from "../../gateway/product.gateway";
import UseCaseInterface from "../../../@shared/use-case/use-case.interface";

export default class CheckStockUseCase implements UseCaseInterface {
    private _productRepository: ProductGateway;

    constructor(productRepository: ProductGateway) {
        this._productRepository = productRepository;
    }

    async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {

        const product = await this._productRepository.find(input.id);

        return {
            id: product.id.id,
            stock: product.stock
        };
    }
}