import {BaseRepository} from "../layers/BaseRepository";
import {User} from "../entity/User";
import {QueryPage} from "../query/QueryPage";
import {EntityRepository} from "typeorm";

@EntityRepository(User)
export class UserRepository extends BaseRepository<User, QueryPage>{

}
