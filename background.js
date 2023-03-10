browser.omnibox.setDefaultSuggestion({
	description: "Search Youtube"
});

browser.omnibox.onInputEntered.addListener(function(input) {
    let url = "https://www.youtube.com/results?search_query=" + input;
    browser.tabs.create({url: url})
});