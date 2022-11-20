import React from "react";

import MyNav from "../Landing/MyNav";

import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<div>
			<MyNav />
			<Outlet />
		</div>
	);
}

/* 
/ Outlet => Notes
*/
