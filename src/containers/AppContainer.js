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
				"The the Way disobeys, the gom jabbar topples. The courtesan disciplines as if politics declares. Paradise sets the enduring question. The enemy believes the significant wife, whether wound when greatness. Duel prepares before the mnemonic total obliteration over the Irulan learns accepts. Spit befalls the incomplete tension unless Rabban threatens religious meteor. &&& The Shadout threatens, the water bond controls the false greenhouse. Doubt rages not only shout. And shield disobeys the Bene Gesserit, except shigawire hunter-seeker emerges. Off maula after perception, beyond fremkit while the fear. &&& Upper heir slips beside prana wherever seduction flounders. The water-fat saves, the harvester strums the free gift. The the Way disobeys, the gom jabbar topples. The courtesan disciplines as if politics declares. Paradise sets the enduring question. The enemy believes the significant wife, whether wound when greatness. Duel prepares before the mnemonic total obliteration over the Irulan learns accepts. Spit befalls the incomplete tension unless Rabban threatens religious meteor. &&& The Shadout threatens, the water bond controls the false greenhouse. Doubt rages not only shout. And shield disobeys the Bene Gesserit, except shigawire hunter-seeker emerges. Off maula after perception, beyond fremkit while the fear. Upper heir slips beside prana wherever seduction flounders. The water-fat saves, the harvester strums the free gift."
		};

		this.onChangeNumParagraphs = this.onChangeNumParagraphs.bind(this);
		this.onClickStartAgain = this.onClickStartAgain.bind(this);
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

	onChangeNumParagraphs(num) {
		this.setState({ numParagraphs: num }, () => {
			console.log("this.state.numParagraphs", this.state.numParagraphs);
			// this.callForText();
		});
	}

	onClickStartAgain() {
		this.setState({ wikiText: "" });
	}

	render() {
		return (
			<App
				{...this.state}
				onChangeNumParagraphs={this.onChangeNumParagraphs}
				onClickStartAgain={this.onClickStartAgain}
			/>
		);
	}
}

export default AppContainer;
