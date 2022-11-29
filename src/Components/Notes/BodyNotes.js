import React from "react";

import Card from "../Common/Card";

import "./BodyNotes.scss";

import { Link } from "react-router-dom";

export default function BodyNotes({ data }) {
	return (
		<div className="BodyNotes">
			{data.map((d) => {
				return (
					<Link
						key={d._id}
						to={`/notes/${d._id}`}
						style={{ textDecoration: "none", color: "#000" }}
					>
						<Card id={d._id} userId={d.userId} title={d.title} body={d.body} />
					</Link>
				);
			})}
		</div>
	);
}
