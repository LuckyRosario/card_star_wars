import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span style={{}} className="navbar-brand img-fluid mb-0 h1 p-3">
					{" "}
					<img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png" alt="Star Wars Logo" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites List
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((favorite, i) => (
							<>
								<a key={i} className="dropdown-item" href="#">
									{favorite.name}
								</a>
								<button
									className="delete btn btn-outline-secondary btn-sm"
									onClick={() => actions.deleteButton(i)}>
									<i className="fas fa-trash" />
								</button>
							</>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};
