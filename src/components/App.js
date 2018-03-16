import React from "react";
import InputBox from "./InputBox";

const App = ({ isFetching, error, wikiText }) => {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">wiki-ipsum</h1>
				<h4>
					a lorem ipsum generator with dynamically generated text from wikipedia
				</h4>
				<hr />
			</header>
			<InputBox wikiText={wikiText} />
			<article className="textbox">
				<p className="wikiText">{wikiText}</p>
			</article>

			<footer>
				<a href="https://github.com/coelacanth7">Created by coelacanth7</a>
			</footer>
		</div>
	);
};

export default App;
