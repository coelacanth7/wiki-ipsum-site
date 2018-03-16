import React, { Component } from "react";
import App from "../components/App";
import wikiIpsum from "../lib/wikiIpsum";

class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			isFetching: false,
			error: null,
			wikiText:
				"Douglas Thomson may refer to: Dougie Thomson (born 1951), Scottish bass guitarist, formerly of the progressive rock band Supertramp Sir Douglas Thomson, 2nd Baronet (1905–1972), Scottish Unionist politician, Member of Parliament 1935–1946 Doug Thomson (footballer) (1896–1959), Australian rules footballer Douglas Thomson (footballer) (born 1891), Scottish footballer Panic Attack is an EP released by the Australian rock band Grinspoon in March 2003. The EP was originally released by itself, but also appeared as a bonus disc with a re-release version of an earlier studio album, New Detention, on 10 March 2003. The EP was developed after Grinspoon recorded a cover of the INXS hit, Don't Change for the soundtrack of an Australian film, Danny Deckchair (May 2003). Its recording and release were relatively rushed between New Detentions first appearance in June 2002 and their next studio album Thrills, Kills & Sunday Pills in September 2004. Band member Pat Davern described the four tracks to Greg Lawrence of WHAMMO website: for Dont Change he said We did the cover, basically for Livid, the group had appeared at that festival in the previous October-November;Off Piste was a new track; while both Boredom and Fall Away were B-sides from the New Detention sessions. We decided to hang on to them for whatever we released in the future. The band supported its appearance with their Don't Panic Tour, using 28 Days as a support act. Panic Attack reached No. 13 on the ARIA Singles Chart"
		};
	}

	componentDidMount() {
		// this.setState({ isFetching: true });
		//
		// wikiIpsum()
		// 	.then(wikiText => {
		// 		this.setState({ wikiText, isFetching: false });
		// 		console.log("wikiText", wikiText);
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 		this.setState({
		// 			wikiText: "There was an error, try again",
		// 			error: error,
		// 			isFetching: false
		// 		});
		// 	});
	}

	render() {
		return <App {...this.state} />;
	}
}

export default AppContainer;
