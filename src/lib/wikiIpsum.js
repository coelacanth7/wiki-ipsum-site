let wikiIpsum = (() => {
	var _ref = _asyncToGenerator(function*(max) {
		let str = "";
		let maxWords = max || 200;

		while (WordCount(str) < maxWords) {
			let result;
			try {
				result = yield getWikiText();
			} catch (error) {
				console.error(error);
				result = false;
			}
			if (!result) break;
			str += " " + result;
		}

		if (max)
			str
				.split(" ")
				.slice(0, maxWords)
				.join(" ");
		return str.trim();
	});

	return function wikiIpsum(_x) {
		return _ref.apply(this, arguments);
	};
})();

let getWikiText = (() => {
	var _ref2 = _asyncToGenerator(function*() {
		try {
			response = yield fetch("https://en.wikipedia.org/wiki/Special:Random");
			const articleTitle = response.url.substring(30);
			let apiJson = yield fetch(`${baseQuery}${articleTitle}`);
			apiJson = yield apiJson.json();
			console.log("apiJson", apiJson);
			const parsed = apiJson.query.pages;
			const text = Object.values(parsed)[0].extract.replace(/^\s+|\s+$/g, "");
			return text.replace(/\s\s/g, "");
		} catch (error) {
			console.error(error);
			return false;
		}
	});

	return function getWikiText() {
		return _ref2.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) {
	return function() {
		var gen = fn.apply(this, arguments);
		return new Promise(function(resolve, reject) {
			function step(key, arg) {
				try {
					var info = gen[key](arg);
					var value = info.value;
				} catch (error) {
					reject(error);
					return;
				}
				if (info.done) {
					resolve(value);
				} else {
					return Promise.resolve(value).then(
						function(value) {
							step("next", value);
						},
						function(err) {
							step("throw", err);
						}
					);
				}
			}
			return step("next");
		});
	};
}

let response;

const baseQuery =
	"https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=";

const WordCount = str => str.split(" ").length;

export default wikiIpsum;
