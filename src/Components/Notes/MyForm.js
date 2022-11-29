import React from "react";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export async function formCreateNote({ request }) {
	let formData = await request.formData();
	await axios.post(process.env.REACT_APP_URL, {
		userId: "emgarcia",
		title: formData.get("title"),
		body: formData.get("body"),
	});
	return redirect("/notes");
}

export async function formEditNote({ request, params }) {
	let formData = await request.formData();
	await axios.put(`${process.env.REACT_APP_URL}${params.idNote}`, {
		title: formData.get("title"),
		body: formData.get("body"),
	});
}

export default function MyForm() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "50%",
				backgroundColor: "#afafaf",
				alignItems: "center",
			}}
		>
			<h3 style={{ margin: 0 }}>Ingresa una Nota</h3>
			<Form
				method="post"
				style={{ display: "flex", flexDirection: "column", width: "50%" }}
			>
				<input type="text" placeholder="Titulo" name="title" />
				<input type="text" name="body" placeholder="Descripcion" />
				<button type="submit">Add</button>
			</Form>
		</div>
	);
}
