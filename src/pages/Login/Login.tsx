/* Libraries */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
/* Styles */
import "./styles/login.css";
import { useForm } from "react-hook-form";

const Login = () => {
	const { register, handleSubmit } = useForm();

	const formFields = {
		email: register("email", {
			required: {
				value: true,
				message: "Field required",
			},
			onChange: (e) => console.log(e.target.value),
		}),
		password: register("password", {
			required: {
				value: true,
				message: "Field required",
			},
			onChange: (e) => console.log(e.target.value),
		}),
	};

	const onSubmit = (data, event) => {
		console.log(data, event);
	};

	return (
		<Container
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h5"
					component="h5"
					marginBottom={4}
					textAlign="center"
				>
					Login
				</Typography>

				<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						error={false}
						id="login-email"
						label="Email"
						helperText="email error"
						variant="outlined"
						type="email"
						required
						{...formFields.email}
					/>

					<TextField
						error={false}
						id="login-password"
						label="Password"
						type="password"
						variant="outlined"
						helperText="password error"
						required
						{...formFields.password}
					/>

					<Button type="submit" variant="outlined">
						Enviar
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default Login;
