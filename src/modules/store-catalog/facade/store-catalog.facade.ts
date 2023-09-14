import StoreCatalogFacadeInterface, {
    FindStoreCatalogFacadeInputDto,
    FindStoreCatalogFacadeOutputDto
} from "./store-catalog.dacade.interface";
import FindProductUseCase from "../use-case/find-product/find-product.use-case";
import FindAllProductsUseCase from "../use-case/find-all-products/find-all-products.use-case";

export interface UseCaseProps {
    findUseCase: FindProductUseCase,
    findAllUseCase: FindAllProductsUseCase
}

export default class StoreCatalogFacade implements StoreCatalogFacadeInterface {
    private readonly findUseCase: FindProductUseCase;
    private readonly findAllUseCase: FindAllProductsUseCase;

    constructor(props: UseCaseProps) {
        this.findUseCase = props.findUseCase;
        this.findAllUseCase = props.findAllUseCase;
    }

    async find(id: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
       return this.findUseCase.execute(id);
    }

    findAll(): Promise<any> {
        return this.findAllUseCase.execute();
    }

}