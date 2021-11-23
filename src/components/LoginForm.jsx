import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const authObj = {
			"Project-ID": "b4b02536-6ebf-44aa-8924-98e377353d44",
			"User-Name": username,
			"User-Secret": password,
		};
		try {
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObj,
			});
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);

			window.location.reload();
		} catch (error) {
			setError("Oops, Incorrect Credentials...");
		}
	};
	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>Start Chating...</span>
						</button>
					</div>
					<h2 className="error"> {error} </h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
