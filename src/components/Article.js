import React from "react";
import Clipboard from "react-clipboard.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Article = ({ wikiText, isFetching, onClickStartAgain }) => {
	if (wikiText.length === 0) return null;

	let wikiElements = wikiText
		.split("&&&")
		.map((paragraph, key) => <p key={key}>{paragraph}</p>);

	let cleanWikiText = wikiText.replace("&&&", " ");

	document.body.style.backgroundColor = "#fff";

	return (
		<article className="textbox">
			<div className="wikiText">
				<ReactCSSTransitionGroup
					transitionName="text"
					transitionAppear={true}
					transitionAppearTimeout={2000}
					transitionEnter={false}
					transitionLeave={false}
				>
					{wikiElements}
				</ReactCSSTransitionGroup>
			</div>
			<span>
				<Clipboard className="button" data-clipboard-text={cleanWikiText}>
					copy text
				</Clipboard>{" "}
				<span className="button" onClick={onClickStartAgain}>
					{" "}
					have another go
				</span>
			</span>
		</article>
	);
};

export default Article;
