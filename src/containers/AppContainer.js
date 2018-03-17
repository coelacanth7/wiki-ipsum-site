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
			wikiText:
				"When it reaches the batter, the center of the cloud is still moving at an appreciable fraction of the speed of light. It hits the bat first, but then the batter, plate, and catcher are all scooped up and carried backward through the backstop as they disintegrate. The shell of x-rays and superheated plasma expands outward and upward, swallowing the backstop, both teams, the stands, and the surrounding neighborhood—all in the first microsecond."
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
