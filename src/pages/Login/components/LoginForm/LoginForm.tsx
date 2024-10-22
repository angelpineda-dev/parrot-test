/* Libraries */
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../../../context/auth/AuthProvider";

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const auth = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const formFields = {
		email: register("email", {
			required: {
				value: true,
				message: "Field required",
			},
			pattern: {
				value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				message: "Not valid email",
			},
		}),
		password: register("password", {
			required: {
				value: true,
				message: "Field required",
			},
		}),
	};

	const onSubmit = (data: FormValues) => {
		console.log(data);

		try {
			auth.setAuthTokens("access", "refresh");
		} catch (error) {}
	};
	return (
		<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
			<TextField
				error={errors.email?.message ? true : false}
				id="login-email"
				label="Email*"
				helperText={errors.email?.message}
				variant="outlined"
				type="email"
				{...formFields.email}
			/>

			<TextField
				error={errors.password?.message ? true : false}
				id="login-password"
				label="Password*"
				type="password"
				variant="outlined"
				helperText={errors.password?.message}
				{...formFields.password}
			/>

			<Button type="submit" variant="outlined">
				Enviar
			</Button>
		</form>
	);
};

export default LoginForm;
