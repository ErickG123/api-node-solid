import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    constructor(private findUserUseCase: FindUserUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const user = await this.findUserUseCase.execute(id);

        return response.json(user);
    }
}