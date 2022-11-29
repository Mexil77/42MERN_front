import React from "react";

import Card from "../Common/Card";

import { Link } from "react-router-dom";

export default function BodyNotes({ data, user }) {
	return (
		<div
			style={{
				backgroundColor: "#30af99",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{data.map((d) => {
				return (
					<Link
						key={d.id}
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
