import "./App.css";
import React, { useState, useEffect } from "react";

import MyForm from "./MyForm";
import MyHeader from "./MyHeader";
import BodyNotes from "./BodyNotes";

function App() {
	const [user, setUser] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((dataFetch) => {
				setData(dataFetch);
			});
	}, []);

	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", width: "100%" }}>
				<MyForm data={data} setData={setData} />
				<MyHeader userNote={user} setUser={setUser} />
			</div>
			<BodyNotes data={data} user={user} />
		</div>
	);
}

export default App;
