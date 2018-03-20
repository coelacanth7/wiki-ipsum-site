import React from "react";
import Clipboard from "react-clipboard.js";

const Article = ({ wikiText, isFetching }) => {
	if (wikiText.length === 0) return null;

	let wikiElements = wikiText
		.split("&&&")
		.map((paragraph, key) => <p key={key}>{paragraph}</p>);

	let cleanWikiText = wikiText.replace("&&&", " ");

	return (
		<article className="textbox">
			<div className="wikiText">{wikiElements}</div>
			<Clipboard className="button" data-clipboard-text={cleanWikiText}>
				Copy Text
			</Clipboard>
		</article>
	);
};

export default Article;
