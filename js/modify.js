var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-62654628-2']);
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = 'https://ssl.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; 
s.parentNode.insertBefore(ga, s);

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