import React, { useState, useEffect } from "react";

import { useLoaderData, Outlet, Link } from "react-router-dom";

import axios from "axios";

import MyForm from "./MyForm";
import MyHeader from "./MyHeader";
import BodyNotes from "./BodyNotes";

export async function notesLoading() {
	let res = await axios.get(process.env.REACT_APP_URL, {
		params: {
			userId: "emgarcia",
		},
	});
	return res.data;
}

export default function Notes() {
	const [user, setUser] = useState(1);
	const [data, setData] = useState([]);

	const notes = useLoaderData();

	useEffect(() => {
		console.log(notes);
		setData(notes);
	}, [notes]);
	return (
		<div style={{ width: "100%" }}>
			<div style={{ display: "flex", width: "100%" }}>
				<Link to="/notes/newNote">Add Note</Link>
			</div>
			<div style={{ display: "flex" }}>
				<BodyNotes data={data} user={user} />
				<Outlet />
			</div>
		</div>
	);
}
