/* Libraries */
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../../../context/auth/AuthProvider";
import { useAxios } from "../../../../context/axios/AxiosProvider";
import { IAuhToken } from "../../../../interfaces";

type FormValues = {
	email: string;
	password: string;
};

const EMAIL = import.meta.env.VITE_EMAIL || "";

const LoginForm = () => {
	const auth = useAuth();
	const { axiosInstance } = useAxios();

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

	const onSubmit = async (data: FormValues) => {
		try {
			const response: IAuhToken = await axiosInstance?.post("/auth/token", {
				username: data?.email,
				password: data?.password,
			});

			console.log(response);
			const { access, refresh } = response;
			auth.setAuthTokens(access, refresh);
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
				defaultValue={EMAIL}
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
