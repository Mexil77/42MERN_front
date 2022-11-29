import React, { useState, useEffect } from "react";

import { useLoaderData, Outlet, Link } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";

import axios from "axios";

import "./Notes.scss";

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
		setData(notes);
	}, [notes]);
	return (
		<div className="Notes">
			<div className="Notes_header">
				<Link
					to="/notes/newNote"
					className="btn btn-primary btn-link Notes_header_link"
				>
					<AiFillFileAdd />
				</Link>
			</div>
			<div className="Notes_body">
				<BodyNotes data={data} user={user} />
				<Outlet />
			</div>
		</div>
	);
}
