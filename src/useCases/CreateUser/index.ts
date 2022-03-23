import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUserRepository = new PrismaUserRepository();

const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
const createUserController = new CreateUserController(createUserUseCase);


export { createUserUseCase, createUserController };