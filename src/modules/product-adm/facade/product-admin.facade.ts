import ProductAdminFacadeInterface, {
    AddProductFacadeInputDto, CheckStockFacadeInputDto,
    CheckStockFacadeOutputDto
} from "./product-admin.facade.interface";
import UseCaseInterface from "../../@shared/use-case/use-case.interface";
import {CheckStockInputDto, CheckStockOutputDto} from "../use-case/check-stock/check-stock.dto";
import {AddProductInputDto, AddProductOutputDto} from "../use-case/add-product/add-product.dto";

export interface UseCaseProps {
    addUseCase: UseCaseInterface<AddProductInputDto, AddProductOutputDto>;
    stockUseCase: UseCaseInterface<CheckStockInputDto, CheckStockOutputDto>;
}

export default class ProductAdminFacade implements ProductAdminFacadeInterface {

    private _addUseCase: UseCaseInterface<AddProductInputDto, AddProductOutputDto>;
    private _checkStockUseCase: UseCaseInterface<CheckStockInputDto, CheckStockOutputDto>;

    constructor(useCasesProps: UseCaseProps) {
        this._addUseCase = useCasesProps.addUseCase;
        this._checkStockUseCase = useCasesProps.stockUseCase;
    }

    async addProduct(input: AddProductFacadeInputDto): Promise<void> {
        await this._addUseCase.execute(input);
    }

    async checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUseCase.execute(input);
    }

}