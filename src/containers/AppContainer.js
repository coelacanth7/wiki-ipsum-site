import React, { Component } from "react";
import App from "../components/App";
import wikiIpsum from "../lib/wikiIpsum";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			isFetching: false,
			error: null,
			numParagraphs: 1,
			wikiText: ""
		};

		this.onClickGenerateButton = this.onClickGenerateButton.bind(this);
		this.onChangeNumParagraphs = this.onChangeNumParagraphs.bind(this);
	}

	callForText() {
		this.setState({ isFetching: true, wikiText: "" });
		let breakable = true;
		let numParagraphs = this.state.numParagraphs;
		console.log("calling");

		for (var i = 0; i < numParagraphs; i++) {
			if (!breakable || numParagraphs > 6) break;
			wikiIpsum(60)
				.then(wikiText => {
					this.setState({
						wikiText: this.state.wikiText + "&&&" + wikiText
					});
					if (i === numParagraphs) this.setState({ isFetching: false });
				})
				.catch(error => {
					console.error(error);
					this.setState({
						wikiText: "There was an error, try again",
						error: error,
						isFetching: false
					});
					breakable = false;
				});
		}
	}

	onClickGenerateButton() {
		this.callForText();
	}

	onChangeNumParagraphs(num) {
		this.setState({ numParagraphs: num }, () => {
			console.log("this.state.numParagraphs", this.state.numParagraphs);
			// this.callForText();
		});
	}

	render() {
		return (
			<App
				{...this.state}
				onChangeNumParagraphs={this.onChangeNumParagraphs}
				onClickGenerateButton={this.onClickGenerateButton}
			/>
		);
	}
}

export default AppContainer;
