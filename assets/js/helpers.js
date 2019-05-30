// Async function to wait X ms before going to next line
export function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function execWhenInView(element, args, callback)  {

		let fn;
		let offset;

		if(args.callback) {
			fn = args.callback;
		} else {
			fn = arguments[arguments.length -1];
		}

		if (args.offset) {
			offset = args.offset;
		} else if (window.innerWidth < 700) {
			offset = 350;
		} else {
			offset = 250;
		}

		function _func() {
	        if (window.pageYOffset + window.innerHeight > element.offsetTop + offset) {
                fn();
                document.removeEventListener('scroll', _func);
            }
		}

		document.addEventListener('scroll',  _func);
		_func();

}