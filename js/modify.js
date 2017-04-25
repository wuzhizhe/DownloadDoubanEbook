var url = null;

function callback(details) {
	if (url.indexOf('read.douban.com/reader/ebook') !== -1) {
	    return {
			redirectUrl: "https://rawgit.com/wuzhizhe/DownloadDoubanEbook/master/js/setup.js"
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