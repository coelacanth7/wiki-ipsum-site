import React from "react";
import FancySelect from "./FancySelect";

const InputBox = ({
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs
}) => {
	return (
		<div className="input-box">
			<h2 id="description-text">
				a lorem ipsum generator with dynamically generated text from wikipedia
			</h2>

			{/* <h4>How many paragraphs?</h4>
			<span className="custom-dropdown">
				<select className="select" onChange={onChangeNumParagraphs}>
					<option value="-" disabled defaultValue="#">
						#
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
			</span> */}

			<FancySelect />

			<br />

			{/* <button className="button" onClick={onClickGenerateButton}>
				Generate
			</button> */}
		</div>
	);
};

export default InputBox;
