import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";

export default function Banner() {
	return (
		<section>
			<div className="Banner">
				<div className="Banner_Box">
					<h1>Bienvenido</h1>
					<p>Tu app para gestionar todas tus notas</p>
					<Link to={"/notes"}>
						<button className="btn">Ir a notas</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
