import {AbstractNormalEntity} from "../entity/AbstractNormalEntity";
import {AbstractEntity} from "../entity/AbstractEntity";
import {QueryPage} from "../query/QueryPage";
import {QueryInterface} from "./core/QueryInterface";
import {CrudInterface} from "./core/CrudInterface";
import {DeleteResult, FindConditions, FindOneOptions, ObjectID} from "typeorm";
import {BaseRepository} from "./BaseRepository";

export abstract class AbstractService<Entity extends AbstractNormalEntity | AbstractEntity, EntityQuery extends QueryPage> implements QueryInterface<Entity, EntityQuery>, CrudInterface<Entity> {
    public abstract getRepository(): BaseRepository<Entity, EntityQuery>;

    public paginate(options: EntityQuery, req?: any, qOptions: any = {}): Promise<any> {
        return this.getRepository().paginate(options, req, qOptions);
    }

    public async searchPaginate(query: EntityQuery, req?: any): Promise<any> {
        return await this.getRepository().searchPaginate(query, req);
    }

    public async deleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>, req?: any): Promise<any> {
        return this.getRepository().deleted(criteria).then((data) => {
            if (!data.raw.affectedRows) {
                throw new Error('request error');
            }
            return data;
        });
    }

    public async softDeleted(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Entity>, req?: any): Promise<DeleteResult> {
        return this.getRepository().softDeleted(criteria).then((data) => {
            if (!data.raw.affectedRows) {
                throw new Error('request error');
            }
            return data;
        });
    }

    public async get(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>, req?: any): Promise<Entity> {
        return await this.getRepository().get(id).then((data) => {
            if (!data) {
                throw new Error('request error');
            }
            return data;
        });
    }

    public async getOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>, req?: any): Promise<Entity> {
        return this.getRepository().getOne(id).then((data) => {
            if (!data) {
                throw new Error('request error');
            }
            return data;
        });
    }

    public async store(entity: any, req?: any): Promise<Entity> {
        const saved = await this.getRepository().store(entity);
        if (!saved) {
            throw new Error('request error');
        }
        return saved;
    }

    public updated(id: number, entity: any, req?: any): Promise<Entity> {
        return this.getRepository().updated(id, entity);
    }

    public validId(id: number, req?: any): Promise<Entity> {
        return this.getRepository().validId(id).then((data) => {
            if (!data) {
                throw new Error('request error');
            }
            return data;
        });
    }

    public async countRecord(options?: EntityQuery, req?: any): Promise<number> {
        return await this.getRepository().countRecord(options);
    }
    public async findRecord(options?: EntityQuery, req?: any): Promise<any> {
        return await this.getRepository().findRecord(options);
    }
    public async findRecordAndCount(options?: EntityQuery, req?: any): Promise<any> {
        return await this.getRepository().findRecordAndCount(options);
    }
    public  hasEntityId(entity: Entity, req?: any): boolean {
        return this.getRepository().hasEntityId(entity);
    }
    public async querySql(options?: EntityQuery, req?: any): Promise<any> {
        return this.getRepository().querySql(options);
    }
}
