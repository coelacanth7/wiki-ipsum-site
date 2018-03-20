import React from "react";

import InputBox from "./InputBox";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";

const App = ({
	isFetching,
	error,
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs
}) => {
	let textDisplayBool = isFetching || wikiText.length ? false : true;

	return (
		<div className="App">
			<Header textDisplayBool={textDisplayBool} />
			<InputBox
				wikiText={wikiText}
				onClickGenerateButton={onClickGenerateButton}
				onChangeNumParagraphs={onChangeNumParagraphs}
				textDisplayBool={textDisplayBool}
			/>
			<Article
				isFetching={isFetching}
				wikiText={wikiText}
				textDisplayBool={textDisplayBool}
			/>
			<Footer />
		</div>
	);
};

export default App;
