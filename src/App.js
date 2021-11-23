import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
	if (!localStorage.getItem("username")) return <LoginForm />;

	return (
		<div>
			<ChatEngine
				height="100vh"
				projectID="b4b02536-6ebf-44aa-8924-98e377353d44"
				userName={localStorage.getItem('username')}
				userSecret={localStorage.getItem('password')}
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>
		</div>
	);
};

export default App;
