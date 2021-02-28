import React from "react";
import Title from "./Header/Title";
import Nav from "./Header/Nav"

export default class Header extends React.Component {
	render() {
		return(
			<header>
				<Title />
				<Nav />
			</header>
		);
	}
}
