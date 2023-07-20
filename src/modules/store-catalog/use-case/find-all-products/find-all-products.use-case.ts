import UseCaseInterface from "../../../@shared/use-case/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";

export default class FindAllProductsUseCase  implements UseCaseInterface {

    constructor(private productRepository: ProductGateway) {
    }
    async execute(): Promise<any> {
        const products = await this.productRepository.findAll();

        return {
            products: products.map((product) => ({
               id: product.id.id,
               name: product.name,
               description: product.description,
               salesPrice: product.salesPrice
            }))
        }
    }

}