import { User } from "../entities/User";

interface IUsersRepository {
    exists(email: string): Promise<boolean>;
    create(user: User): Promise<User>;
    findUser(id: string): Promise<User>;
    findAllUsers(): Promise<User[]>;
}

export { IUsersRepository };