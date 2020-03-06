import {QueryInterface} from "./core/QueryInterface";
import {CrudInterface} from "./core/CrudInterface";
import {BaseRepository} from "./BaseRepository";
import {AbstractNormalEntity} from "../entity/AbstractNormalEntity";
import {AbstractEntity} from "../entity/AbstractEntity";
import {QueryPage} from "../query/QueryPage";

export interface ServiceInterface<Entity extends AbstractNormalEntity | AbstractEntity, EntityQuery extends QueryPage> extends QueryInterface<Entity, EntityQuery>, CrudInterface<Entity>{
    getRepository(): BaseRepository<Entity, EntityQuery>;
}
