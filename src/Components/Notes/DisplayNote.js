import React from "react";

import axios from "axios";

import Card from "../Common/Card";

import { Link, useLoaderData } from "react-router-dom";

export async function noteLoader({ params }) {
	let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	let note = res.data.find((n) => n.id === Number(params.idNote));
	return note;
}
export default function DisplayNote() {
	const note = useLoaderData();
	return (
		<div>
			<Card
				id={note.id}
				userId={note.userId}
				title={note.title}
				body={note.body}
			/>
			<Link to={"/notes"}>
				<button>Guardar</button>
			</Link>
		</div>
	);
}
