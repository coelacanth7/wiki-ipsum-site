import React, { Component } from "react";

class FancySelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayList: false,
			selection: null,
			number: 1,
			paragraphs: "paragraphs"
		};

		this.onChangeNumParagraphs = props.onChangeNumParagraphs;
		this.onClickList = this.onClickList.bind(this);
		this.onClickSelection = this.onClickSelection.bind(this);
	}

	onClickList(e) {
		let el = e.target;
		this.setState({ displayList: true });
	}

	onClickSelection(e) {
		this.setState(
			{ selection: e.target.name, number: e.target.id, displayList: false },
			() => {
				Number(this.state.number) === 1
					? (this.state.paragraphs = "paragraph")
					: (this.state.paragraphs = "paragraphs");
				this.onChangeNumParagraphs(this.state.number);
			}
		);
	}

	render() {
		let displayList = this.state.displayList ? "contents" : "none";
		let displayPlaceholder = this.state.displayList ? "none" : "contents";

		let selection = this.state.selection ? (
			this.state.selection
		) : (
			<span
				style={{ display: displayPlaceholder }}
				onClick={this.onClickList}
				value="1"
				className="placeholder"
			>
				<span className="select">select</span>
			</span>
		);

		return (
			<div className="wrapper typo">
				<div className="list">
					{selection}
					<ul style={{ display: displayList }} className="list__ul">
						<li>
							<a onClick={this.onClickSelection} id="1" name="one">
								one
							</a>
						</li>
						<li>
							<a onClick={this.onClickSelection} id="2" name="two">
								two
							</a>
						</li>
						<li>
							<a onClick={this.onClickSelection} id="3" name="three">
								three
							</a>
						</li>
						<li>
							<a onClick={this.onClickSelection} id="4" name="four">
								four
							</a>
						</li>
					</ul>
				</div>{" "}
				{this.state.paragraphs}
			</div>
		);
	}
}

export default FancySelect;
