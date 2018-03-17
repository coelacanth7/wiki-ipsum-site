import React, { Component } from "react";

class FancySelect extends Component {
	constructor() {
		super();
	}

	componentDidMount() {}

	render() {
		return (
			<div className="wrapper typo">
				<div className="list">
					<span className="placeholder">select</span>
					<ul className="list__ul">
						<li>
							<a value="1">one</a>
						</li>
						<li>
							<a value="2">two</a>
						</li>
						<li>
							<a value="3">three</a>
						</li>
						<li>
							<a value="4">four</a>
						</li>
					</ul>
				</div>{" "}
				paragraphs
			</div>
		);
	}
}

export default FancySelect;
