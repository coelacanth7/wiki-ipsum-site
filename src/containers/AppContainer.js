import React, { Component } from "react";
import App from "../components/App";
import wikiIpsum from "../lib/wikiIpsum";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			isFetching: true,
			error: null,
			wikiText: ""
		};
	}

	componentDidMount() {
		this.setState({ isFetching: true });

		wikiIpsum()
			.then(wikiText => {
				this.setState({ wikiText, isFetching: false });
				console.log("wikiText", wikiText);
			})
			.catch(error => {
				console.error(error);
				this.setState({
					wikiText: "There was an error, try again",
					error: error,
					isFetching: false
				});
			});
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
