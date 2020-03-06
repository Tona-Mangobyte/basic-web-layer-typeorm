import {DeleteResult, FindConditions, FindOneOptions, ObjectID} from "typeorm";

export interface CrudInterface<Entity> {
    get(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>, req?: any): Promise<Entity>;
    getOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>, req?: any): Promise<Entity>;
    store(entity: Entity, req?: any): Promise<Entity>;
    validId(id: number, req?: any): Promise<Entity>;
    hasId(entity: Entity, req?: any) :Promise<boolean>;
    mergeRecord(entity: any, req?: any):Promise<Entity>;
    updated(id: number, entity: Entity, req?: any): Promise<Entity>;
    deleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>, req?: any): Promise<DeleteResult>;
    softDeleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>, req?: any): Promise<DeleteResult>;
}
