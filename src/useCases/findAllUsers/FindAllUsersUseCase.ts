import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindAllUsersUseCase {
    constructor(private userRepository: IUsersRepository) {

    }

    async execute() {
        const users = await this.userRepository.findAllUsers();

        return users;
    }
}