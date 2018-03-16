let request = require("axios"),
	response;

const baseQuery =
	"https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&explaintext=&titles=";
const titles =
	"https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*";

const WordCount = str => str.split(" ").length;

async function wikiIpsum(max) {
	let str = "";
	let maxWords = max || 200;

	while (WordCount(str) < maxWords) {
		let result;
		try {
			result = await getWikiText();
		} catch (error) {
			console.error(error);
			result = false;
		}

		if (result === false) {
			str = "error";
			break;
		}

		str += " " + result;
	}

	if (max)
		str
			.split(" ")
			.slice(0, maxWords)
			.join(" ");
	return str.trim();
}

async function getWikiText() {
	try {
		response = await request(titles);
		console.log(response);
		let articleTitle = response.data.query.random[0].title;
		if (!articleTitle) return "";
		const apiJson = await request(`${baseQuery}${articleTitle}`);
		console.log(apiJson);
		const parsed = apiJson.data.query.pages;
		if (Object.values(parsed)[0].extract === undefined) return false;
		const text = Object.values(parsed)[0].extract.replace(/^\s+|\s+$/g, "");
		if (text === "" || !text) return "";
		return text.replace(/\s\s/g, "");
	} catch (error) {
		console.error(error);
		return false;
	}
}

export default wikiIpsum;
