import ProductAdminFacadeInterface, {
    AddProductFacadeInputDto, CheckStockFacadeInputDto,
    CheckStockFacadeOutputDto
} from "./product-admin.facade.interface";
import UseCaseInterface from "../../@shared/use-case/use-case.interface";

export interface UseCaseProps {
    addUseCase: UseCaseInterface;
    stockUseCase: UseCaseInterface;
}

export default class ProductAdminFacade implements ProductAdminFacadeInterface {

    private _addUseCase: UseCaseInterface;
    private _checkStockUseCase: UseCaseInterface;

    constructor(useCasesProps: UseCaseProps) {
        this._addUseCase = useCasesProps.addUseCase;
        this._checkStockUseCase = useCasesProps.stockUseCase;
    }

    async addProduct(input: AddProductFacadeInputDto): Promise<void> {
        return this._addUseCase.execute(input);
    }

    async checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUseCase.execute(input);
    }

}