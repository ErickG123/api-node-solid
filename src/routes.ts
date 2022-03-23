import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";import { findAllUsersController } from "./useCases/findAllUsers";
import { findUserController } from "./useCases/FindUser";
;

const router = Router();

router.post("/users", (request, response) => {
    return createUserController.handle(request, response);
});

router.get("/user/:id", (request, response) => {
    return findUserController.handle(request, response);
});

router.get("/users", (request, response) => {
    return findAllUsersController.handle(request, response);
});

export { router };