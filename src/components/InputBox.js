import React from "react";
import FancySelect from "./FancySelect";

const InputBox = ({
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs,
	textDisplayBool
}) => {
	if (!textDisplayBool) return null;

	return (
		<div className="input-box">
			<h2 id="description-text">
				a lorem ipsum generator with dynamically generated text from wikipedia
			</h2>

			<FancySelect onChangeNumParagraphs={onChangeNumParagraphs} />

			<br />

			{/* <button className="button" onClick={onClickGenerateButton}>
				Generate
			</button> */}
		</div>
	);
};

export default InputBox;
