import React from "react";
import InputBox from "./InputBox";

const App = ({
	isFetching,
	error,
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs
}) => {
	let wikiElements = wikiText
		.split("&&&")
		.map((paragraph, key) => <p key={key}>{paragraph}</p>);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">wiki-ipsum</h1>
				<h4>
					a lorem ipsum generator with dynamically generated text from wikipedia
				</h4>
				<hr />
			</header>
			<InputBox
				wikiText={wikiText}
				onClickGenerateButton={onClickGenerateButton}
				onChangeNumParagraphs={onChangeNumParagraphs}
			/>
			<article className="textbox">
				<div className="wikiText">{wikiElements}</div>
			</article>

			<footer>
				<a href="https://github.com/coelacanth7">Created by coelacanth7</a>
			</footer>
		</div>
	);
};

export default App;
