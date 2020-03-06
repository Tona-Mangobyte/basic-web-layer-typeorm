import {DeleteResult, FindConditions, FindOneOptions, ObjectID, ObjectLiteral, Repository} from "typeorm";
import {CrudInterface} from "./CrudInterface";

export class CrudRepository<Entity extends ObjectLiteral> extends Repository<Entity> implements CrudInterface<Entity> {
    public async validId(id: number): Promise<Entity> {
        return await this.findOne(id);
    }
    public async get(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>): Promise<Entity> {
        return await this.findOne(id);
    }
    public hasEntityId(entity: Entity): boolean {
        return this.hasId(entity);
    }

    public async getOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>, req?: any): Promise<Entity> {
        return await this.findOne(id);
    }

    public async store(entity: Entity): Promise<Entity> {
        return await this.save(entity);
    }
    public async updated(id: number, entity: Entity): Promise<Entity> {
        const data = await this.get(id);
        await this.update(id, entity);
        return data;
    }
    public async deleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>): Promise<DeleteResult> {
        return await this.delete(criteria);
    }
    public async softDeleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>, req?: any): Promise<DeleteResult> {
        return await this.delete(criteria);
    }
}
