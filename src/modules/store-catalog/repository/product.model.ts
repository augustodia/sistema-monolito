import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Optional} from "sequelize";

export type ProductColumns = {
    id: string;
    name: string;
    description: string;
    salesPrice: number;
}

interface ProductCreationAttributes extends Optional<ProductColumns, 'id'> {}

@Table({
    tableName: 'products',
    timestamps: false,
})
export class ProductModel extends Model<ProductColumns, ProductCreationAttributes> implements ProductCreationAttributes {
    @PrimaryKey
    @Column({allowNull: false})
    id: string;

    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    description: string;

    @Column({allowNull: false})
    salesPrice: number;
}