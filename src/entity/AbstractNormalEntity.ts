import {BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export abstract class AbstractNormalEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    public id: number;

    @CreateDateColumn({ nullable: true })
    public created_at: Date;

    @UpdateDateColumn({ nullable: true })
    public updated_at: Date;
}
