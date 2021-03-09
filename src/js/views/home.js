import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	return (
		<div className="text-center mt-5">
			<Card />
		</div>
	);
};
