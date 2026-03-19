import type { User } from "@repo/ts-server-domain";

export interface IUserRepository {
	findById(id: string): Promise<User | null>;
	save(user: User): Promise<User>;
}
