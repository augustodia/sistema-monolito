import Id from "../value-object/id.value-object";

type BaseProps = {
    id?: Id;
    createdAt?: Date;
    updatedAt?: Date;
}

export default class BaseEntity {
    private readonly _id: Id;
    private readonly _createdAt: Date;
    private _updatedAt: Date;

    constructor(props: BaseProps) {
        this._id = props.id || new Id();
        this._createdAt = props.createdAt || new Date();
        this._updatedAt = props.updatedAt || new Date();
    }

    get id(): Id {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }
}