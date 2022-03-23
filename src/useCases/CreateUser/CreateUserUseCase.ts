import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {

    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlredyExists = await this.usersRepository.exists(data.email);

        if (userAlredyExists) {
            throw new Error('User alredy exists.')
        }

        const user = new User(data);

        await this.usersRepository.create(user);
    }
}