import React from "react";

import "./Card.css";

export default function Card(props) {
	return (
		<div className="noteCard" style={{}}>
			<h3 style={{ margin: 0 }}>{props.title}</h3>
			<p>{props.body}</p>
		</div>
	);
}
