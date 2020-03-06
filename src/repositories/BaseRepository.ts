import {QueryPage} from "../query/QueryPage";
import {CrudRepository} from "./core/CrudRepository";
import {QueryInterface} from "./core/QueryInterface";
import {AbstractNormalEntity} from "../entity/AbstractNormalEntity";
import {AbstractEntity} from "../entity/AbstractEntity";
import {Repository} from "typeorm";

export class BaseRepository<Entity extends AbstractNormalEntity | AbstractEntity, QueryEntity extends QueryPage> extends CrudRepository<Entity> implements QueryInterface<Entity, QueryEntity> {
    constructor() {
        super();
    }

    public paginate(options: QueryEntity, req?: any, qOptions: any = {}): Promise<any> {
        return this.generatePagination<Entity>(this, options.page, options.limit);
    }

    public async searchPaginate(query: QueryEntity, req?: any): Promise<any> {
        return await this.paginate(query, req, query.buildSearch());
    }
    public countRecord(options?: QueryEntity, req?: any): Promise<number> {
        return undefined;
    }

    public findRecord(options?: QueryEntity, req?: any): Promise<any> {
        return this.find(options.findRecord());
    }

    public findRecordAndCount(options?: QueryEntity, req?: any): Promise<any> {
        return this.findAndCount(options.findRecordAndCount());
    }

    public querySql(options?: QueryEntity, req?: any): Promise<any> {
        return this.query(options.querySql(), options.querySqlParameter());
    }
    private async generatePagination<T>(repository: Repository<T> ,page: number, limit: number): Promise<any> {
        const [list, total] = await repository.findAndCount({
            skip: page * limit,
            take: limit,
        });
        const isNext = total / limit >= page + 1;
        const isPrevious = page > 0;
        const routes = {
            next: isNext ? page + 2 : '',
            previous: isPrevious ? page : '',
        };
        const { previous, next } = routes;
        const pagination = {
            page: page + 1,
            next,
            previous,
            limit,
            total_pages: Math.ceil(total / limit),
            total_records: total,
        };
        return { pagination, list };
    }
}
