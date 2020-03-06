import {Entity, Column} from "typeorm";
import {AbstractNormalEntity} from "./AbstractNormalEntity";

@Entity()
export class User extends AbstractNormalEntity {

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
