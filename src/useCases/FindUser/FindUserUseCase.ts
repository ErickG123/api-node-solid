import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindUserUseCase {
    constructor(private userRepository: IUsersRepository) {

    }

    async execute(id: string) {
        const user = await this.userRepository.findUser(id);

        return user;
    }
}