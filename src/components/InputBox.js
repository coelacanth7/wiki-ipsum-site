import React from "react";
import Clipboard from "react-clipboard.js";

const InputBox = ({
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs
}) => {
	let cleanWikiText = wikiText.replace("&&&", " ");

	return (
		<div className="input-box">
			<select className="button" onChange={onChangeNumParagraphs}>
				<option value="-" disabled defaultValue>
					#
				</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			<Clipboard className="button" data-clipboard-text={cleanWikiText}>
				Copy Text
			</Clipboard>
			<button className="button" onClick={onClickGenerateButton}>
				Generate
			</button>
		</div>
	);
};

export default InputBox;
