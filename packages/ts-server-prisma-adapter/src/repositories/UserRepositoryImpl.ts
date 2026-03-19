import type { User } from "@repo/ts-server-domain";
import type { IUserRepository } from "@repo/ts-server-infrastructure";
import { prisma } from "../prisma";

export class UserRepositoryImpl implements IUserRepository {
	async findById(id: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: { id },
		});
		if (!user) return null;
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: user.createdAt,
		};
	}

	async save(user: User): Promise<User> {
		const created = await prisma.user.upsert({
			where: { id: user.id },
			create: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
			update: {
				name: user.name,
				email: user.email,
			},
		});
		return {
			id: created.id,
			name: created.name,
			email: created.email,
			createdAt: created.createdAt,
		};
	}
}
