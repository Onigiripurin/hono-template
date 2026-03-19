import type { User } from "@repo/ts-server-domain";
import type { IUserRepository } from "@repo/ts-server-infrastructure";

type CreateUserInput = {
	name: string;
	email: string;
};

export class CreateUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(input: CreateUserInput): Promise<User> {
		const user: User = {
			id: crypto.randomUUID(),
			name: input.name,
			email: input.email,
			createdAt: new Date(),
		};
		return this.userRepository.save(user);
	}
}
