var url = null;

function callback(details) {
	if (url.indexOf('read.douban.com/reader/ebook') !== -1) {
	    return {
			redirectUrl: "http://127.0.0.1:3001/webserverdir/setup1.js"
		}
	}
}

chrome.webRequest.onBeforeRequest.addListener(callback, {
	urls: [
		'*://img3.doubanio.com/*/setup.js'
	]
}, ["blocking"]);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	url = tab.url;
});