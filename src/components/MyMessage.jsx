import React from "react";

const MyMessage = ({ message }) => {
	if (message.attachments.length > 0) {
		return (
			<img
				src={message.attachments[0].file}
				alt="message-attachment"
				className="message-image"
				style={{ float: "right" }}
			/>
		);
	}
	// let arr = []
	// console.log(message.text.slice(3,-4));
	return (
		<div
			className="message"
			style={{
				float: "right",
				marginRight: "18px",
				color: "white",
				backgroundColor: "#3B2A50",
			}}
		>
			{message.text}
			{/* {message.text.slice(3, -4)} */}
		</div>
	);
};

export default MyMessage;
