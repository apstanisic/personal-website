// Smooth scrool polyfill
require('smoothscroll-polyfill').polyfill();

// forEach polyfill for NodeList
(() => {
	if (NodeList.prototype.forEach === undefined) {
		NodeList.prototype.forEach = Array.prototype.forEach
	}
})();