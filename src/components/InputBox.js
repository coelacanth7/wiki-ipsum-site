import React from "react";
import Clipboard from "react-clipboard.js";

const InputBox = ({ wikiText }) => (
	<div className="input-box">
		<button className="button">#</button>
		<Clipboard className="button" data-clipboard-text={wikiText}>
			Copy Text
		</Clipboard>
		<button className="button">Generate</button>
	</div>
);

export default InputBox;
