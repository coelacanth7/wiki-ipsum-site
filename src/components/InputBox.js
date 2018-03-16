import React from "react";
import Clipboard from "react-clipboard.js";

const InputBox = ({ wikiText, onClickGenerateButton }) => (
	<div className="input-box">
		<button className="button">#</button>
		<Clipboard className="button" data-clipboard-text={wikiText}>
			Copy Text
		</Clipboard>
		<button className="button" onClick={onClickGenerateButton}>
			Generate
		</button>
	</div>
);

export default InputBox;
