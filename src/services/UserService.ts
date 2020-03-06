import {AbstractService} from "../layers/AbstractService";
import {User} from "../entity/User";
import {QueryPage} from "../query/QueryPage";
import {BaseRepository} from "../layers/BaseRepository";
import {UserRepository} from "../repositories/UserRepository";

export class UserService extends AbstractService<User, QueryPage>{
    private readonly _userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        super();
        this._userRepository = userRepository;
    }
    public getRepository(): BaseRepository<User, QueryPage> {
        return this._userRepository;
    }

}
