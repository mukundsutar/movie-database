import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import movieJson from "./docs/movie.json";

export default function App() {
	const [apiData, setAPIData] = useState(movieJson);

	useEffect(() => {
		async function fetchMyAPI() {
			const url = await fetch(
				"https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&sort_by=popularity.desc"
			);
			const data = await url.json();

			setAPIData(data);
		}

		fetchMyAPI();
	}, []);

	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							{" "}
							<Details />
							<Gallery apiData={apiData} />
						</>
					}
				/>

				<Route
					path="/popular"
					element={
						<>
							<Details />
						</>
					}
				/>

				<Route
					path="/top-rated"
					element={
						<>
							{" "}
							<Details />
							<Gallery />
						</>
					}
				/>
			</Routes>

			<TMDB />
		</>
	);
}
