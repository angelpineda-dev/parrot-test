import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		env: {
			username: process.env.VITE_USERNAME,
			password: process.env.VITE_USER_PASSWORD,
		},
	},
});
