import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { FindAllUsersController } from "./FindAllUsersController";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";


const prismaUserRepository = new PrismaUserRepository();

const findAllUsersUseCase = new FindAllUsersUseCase(prismaUserRepository);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

export { findAllUsersUseCase, findAllUsersController };
