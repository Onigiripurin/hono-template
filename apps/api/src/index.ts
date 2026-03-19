import { CreateUserUseCase } from "@repo/ts-server-application";
import { UserRepository } from "@repo/ts-server-prisma-adapter";
import { Hono } from "hono";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.post("/users", async (c) => {
	const body = await c.req.json<{ name: string; email: string }>();
	const user = await createUserUseCase.execute({
		name: body.name,
		email: body.email,
	});
	return c.json(user, 201);
});

export default app;
