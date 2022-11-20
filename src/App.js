import "./App.css";
import React from "react";

import Root from "./Components/Root/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Notes, { notesLoading } from "./Components/Notes/Notes";
import Banner from "./Components/Landing/Banner";
import DisplayNote, { noteLoader } from "./Components/Notes/DisplayNote";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "",
					element: <Banner />,
				},
				{
					path: "notes",
					element: <Notes />,
					loader: notesLoading,
					children: [
						{
							path: ":idNote",
							element: <DisplayNote />,
							loader: noteLoader,
						},
					],
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
