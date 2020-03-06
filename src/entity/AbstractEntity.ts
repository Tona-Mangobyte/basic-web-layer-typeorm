import {AbstractNormalEntity} from "./AbstractNormalEntity";

export abstract class AbstractEntity extends AbstractNormalEntity {
    // @DeleteDateColumn({ type: 'datetime', name: 'deleted_at' })
    public deleted_at: Date;
}
