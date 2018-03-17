import React from "react";
import InputBox from "./InputBox";
import Clipboard from "react-clipboard.js";
import WikiSvg from "./WikiSvg";

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

	let cleanWikiText = wikiText.replace("&&&", " ");

	return (
		<div className="App">
			<header className="App-header">
				<WikiSvg />
				<h1 className="App-title">wiki-ipsum</h1>
			</header>

			<InputBox
				wikiText={wikiText}
				onClickGenerateButton={onClickGenerateButton}
				onChangeNumParagraphs={onChangeNumParagraphs}
			/>
			<article className="textbox">
				<div className="wikiText">{wikiElements}</div>
				<Clipboard className="button" data-clipboard-text={cleanWikiText}>
					Copy Text
				</Clipboard>
			</article>
			<footer>
				<a href="https://github.com/coelacanth7">Created by coelacanth7</a>
			</footer>
		</div>
	);
};

export default App;
