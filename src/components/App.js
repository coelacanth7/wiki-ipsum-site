import React from "react";

const App = ({ isFetching, error, wikiText }) => {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Welcome to wikiIpsum</h1>
			</header>
			<p className="App-intro">{wikiText}</p>
		</div>
	);
};

export default App;
