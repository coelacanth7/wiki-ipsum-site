import React from "react";
import FancySelect from "./FancySelect";
const InputBox = ({
	wikiText,
	onClickGenerateButton,
	onChangeNumParagraphs
}) => {
	// $(document).ready(function() {
	// 	var el = {};
	//
	// 	$(".placeholder").on("click", function(ev) {
	// 		$(".placeholder").css("opacity", "0");
	// 		$(".list__ul").toggle();
	// 	});
	//
	// 	$(".list__ul a").on("click", function(ev) {
	// 		ev.preventDefault();
	// 		var index = $(this)
	// 			.parent()
	// 			.index();
	//
	// 		$(".placeholder")
	// 			.text($(this).text())
	// 			.css("opacity", "1");
	//
	// 		console.log(
	// 			$(".list__ul")
	// 				.find("li")
	// 				.eq(index)
	// 				.html()
	// 		);
	//
	// 		$(".list__ul")
	// 			.find("li")
	// 			.eq(index)
	// 			.prependTo(".list__ul");
	// 		$(".list__ul").toggle();
	// 	});
	//
	// 	$("select").on("change", function(e) {
	// 		// Set text on placeholder hidden element
	// 		$(".placeholder").text(this.value);
	//
	// 		// Animate select width as placeholder
	// 		$(this).animate({ width: $(".placeholder").width() + "px" });
	// 	});
	// });

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

			<button className="button" onClick={onClickGenerateButton}>
				Generate
			</button>
		</div>
	);
};

export default InputBox;
