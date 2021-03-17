import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(params);
	return (
		<>
			{store.characters[params.i] && (
				<div>
					<h1>{store.characters[params.i].name}</h1>
					<h2>{store.characters[params.i].birth_year}</h2>
					<h2>{store.characters[params.i].height}</h2>
					<h2>{store.characters[params.i].mass}</h2>
					<h2>{store.characters[params.i].eye_color}</h2>
					<h2>{store.characters[params.i].hair_color}</h2>
					<h2>{store.characters[params.i].skin_color}</h2>
				</div>
			)}
		</>
	);
};
