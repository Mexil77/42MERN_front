import React from "react";
import { Link } from "react-router-dom";

import "./Banner.scss";

export default function Banner() {
	return (
		<section>
			<div className="Banner">
				<div className="Banner_Box">
					<h1 className="Banner_Box_title">Bienvenido</h1>
					<p>Tu app para gestionar todas tus notas</p>
					<Link to={"/notes"} className="btn btn-link Banner_Box_Link">
						Ir a notas
					</Link>
				</div>
			</div>
		</section>
	);
}
