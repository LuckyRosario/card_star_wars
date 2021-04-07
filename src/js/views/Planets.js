import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(params);
	return (
		<>
			{store.planets[params.i] && (
				<div className="container">
					<h1>{store.planets[params.i].rotation_period}</h1>
					<h2>{store.planets[params.i].orbital_period}</h2>
					<h2>{store.planets[params.i].climate}</h2>
					<h2>{store.planets[params.i].population}</h2>
					<h2>{store.planets[params.i].gravity}</h2>
					<h2>{store.planets[params.i].terrain}</h2>
				</div>
			)}
		</>
	);
};
