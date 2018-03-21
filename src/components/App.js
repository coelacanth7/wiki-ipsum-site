import React from "react";

import InputBox from "./InputBox";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";

const App = ({
	isFetching,
	error,
	wikiText,
	onChangeNumParagraphs,
	onClickStartAgain
}) => {
	let textDisplayBool = isFetching || wikiText.length ? false : true;
	if (textDisplayBool) document.body.style.backgroundColor = null;

	return (
		<div className="App">
			<Header textDisplayBool={textDisplayBool} />
			<InputBox
				wikiText={wikiText}
				onChangeNumParagraphs={onChangeNumParagraphs}
				textDisplayBool={textDisplayBool}
			/>
			<Article
				isFetching={isFetching}
				wikiText={wikiText}
				textDisplayBool={textDisplayBool}
				onClickStartAgain={onClickStartAgain}
			/>
			<Footer />
		</div>
	);
};

export default App;
