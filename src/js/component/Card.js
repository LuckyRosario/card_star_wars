import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card.scss";


export const Card = props => {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div className="container">
			<h1 className="text-muted">Characters</h1>
			<div className="card-group card-group-scroll">
				{store.characters.map((character, i) => (
					<div key={i} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<p>{store.quotes[i]}</p>
							<div className="d-flex justify-content-between">
								<Link className="btn btn-dark" to={`/characters/${i}`}>
									Learn More
								</Link>

								<button className="btn btn-outline-danger" onClick={() => actions.addItem(character)}>
									<i className="fas fa-heart favorite" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<h1 className="text-muted">Planets</h1>
			<div className="card-group card-group-scroll">
				{store.planets.map((planet, i) => (
					<div key={i} className="card" style={{ width: "18rem" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">place</p>
							<div className="d-flex justify-content-between">
								<Link className="btn btn-dark" to={`/planets/${i}`}>
									Learn More
								</Link>
								<button className="btn btn-outline-danger" onClick={() => actions.addItem(planet)}>
									<i className="fas fa-heart favorite" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
