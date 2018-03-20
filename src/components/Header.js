import React from "react";
import WikiSvg from "./WikiSvg";

const Header = ({ textDisplayBool }) => {
	let color = textDisplayBool ? "white" : "#32dbf5";

	return (
		<header className="App-header" style={{ color: color }}>
			<WikiSvg />
			<h1 className="App-title">wiki-ipsum</h1>
		</header>
	);
};

export default Header;
