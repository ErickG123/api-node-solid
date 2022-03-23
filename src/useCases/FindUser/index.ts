import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";

const prismaUserRepository = new PrismaUserRepository();

const findUserUseCase = new FindUserUseCase(prismaUserRepository);
const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController };
