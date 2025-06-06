import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

enum Role {
	Admin = "ADMIN",
	User = "USER",
	Publisher = "PUBLISHER",
	Designer = "DESIGNER",
}

interface UserData {
	username: string;
	email: string;
	password: string;
	role: Role;
}

export class UserSeed {
	private count: number;
	private includeAdmin: boolean;
	private data: UserData[] = [];

	constructor(count: number, includeAdmin = true) {
		this.count = count;
		this.includeAdmin = includeAdmin;
	}

	private async createAdminUser(): Promise<void> {
		this.data.push({
			username: "Admin",
			email: "admin@tckr.uk",
			password: await bcrypt.hash("pass", 10),
			role: Role.Admin,
		});
	}

	async createSeedData(): Promise<UserData[]> {
		if (this.includeAdmin) await this.createAdminUser();

		const hashedPass = await bcrypt.hash("pass", 10);

		for (let i = 0; i < this.count; i++) {
			this.data.push({
				username: faker.internet.username(),
				email: faker.internet.email(),
				password: hashedPass,
				role: Role.User,
			});
		}

		return this.data;
	}
}
