import { prismaClient } from "../../database/prismaClient"
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUserRepository implements IUsersRepository {
    async exists(email: string): Promise<boolean> {
        const user = await prismaClient.user.findFirst({
            where: {
                email,
            },
        });

        return !!user;
    }

    async create({ name, email, password }: User): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return user;
    }

    async findUser(id: string): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: {
                id,
            },
        });

        return user;
    }

    async findAllUsers(): Promise<User[]> {
        const users = await prismaClient.user.findMany();

        return users;
    }
}

export { PrismaUserRepository };