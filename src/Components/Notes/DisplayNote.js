import React from "react";

import axios from "axios";

import Card from "../Common/Card";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./DisplayNotes.scss";

import { Link, useLoaderData, redirect, Form } from "react-router-dom";

export async function noteLoader({ params }) {
	let res = await axios.get(`${process.env.REACT_APP_URL}${params.idNote}`);
	console.log(res.data);
	return res.data;
}

export async function noteDeleteAction({ params }) {
	await axios.delete(`${process.env.REACT_APP_URL}${params.idNote}`);
	return redirect("/notes");
}

export default function DisplayNote() {
	const note = useLoaderData();
	return (
		<div>
			<Card
				id={note._id}
				userId={note.userId}
				title={note.title}
				body={note.body}
			/>
			<div className="DisplayNote_butons">
				<Link
					to={`/notes/${note._id}/edit`}
					className="btn btn-link btn-primary DisplayNote_butons_edit"
				>
					<AiFillEdit />
				</Link>
				<Form method="post">
					<button
						type="submit"
						className="btn btn-danger DisplayNote_butons_delete"
					>
						<AiFillDelete />
					</button>
				</Form>
			</div>
		</div>
	);
}
