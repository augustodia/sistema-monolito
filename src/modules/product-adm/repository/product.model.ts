import {Column, Model, PrimaryKey, Table, Validate} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes, Optional} from "sequelize";

export type ProductColumns = {
    id: string;
    name: string;
    description: string;
    purchasePrice: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

interface ProductCreationAttributes extends Optional<ProductColumns, 'id'> {
    name: string;
}

@Table({
    tableName: 'products',
    timestamps: false,
})
export class ProductModel extends Model<ProductColumns, ProductCreationAttributes> implements ProductCreationAttributes {
    @PrimaryKey
    @Column({allowNull: false})
    ids: string;

    @Column({allowNull: false})
    @Validate({notEmpty: true})
    name: string;

    @Column({allowNull: false})
    description: string;

    @Column({allowNull: false})
    purchasePrice: number;

    @Column({allowNull: false})
    stock: number;

    @Column({allowNull: false})
    createdAt: Date;

    @Column({allowNull: false})
    updatedAt: Date;
}