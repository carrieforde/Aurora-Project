/**
 * Easily add smooth scrolling.
 * 
 * @class SmoothScroll
 */
class SmoothScroll {
	/**
	 * Creates an instance of SmoothScroll.
	 * @param {object} options The options configuration object.
	 * @memberof SmoothScroll
	 */
	constructor(options) {

		/**
		 * The configuration object.
		 * @property {string} menuSelector     The selector menu selector.
		 * @property {number} mobileBreakPoint The breakpoint at which smooth scroll should activate.
		 * @property {number} headerHeight     The header height.
		 * @property {number} timeout          Length of time to wait to update focus.
		 */
		this.options = Object.assign(
			{
				menuSelector: '.menu',
				mobileBreakPoint: 900,
				headerHeight: 0,
				timeout: 500
			},
			options
		);

		this.bindEvents();
	}

	/**
	 * Do the smooth scrolling.
	 * 
	 * @param {string} el The clicked link.
	 * @memberof SmoothScroll
	 */
	smoothScroll (el) {
		event.preventDefault();

		var hash   = el.getAttribute('href'),
			url    = window.location.pathname,
			target = document.querySelector(hash),
			offset = target.offsetTop;

		// Check window width, and update offset accordingly.
		if (window.innerWidth > this.options.mobileBreakPoint - 1) {
			offset = offset - this.options.headerHeight;
		}

		// Scroll the the desired element.
		window.scroll({ left: 0, top: offset, behavior: 'smooth' });

		// Update focus after scolling is complete.
		setTimeout(() => {
			// Updates focus to our target element.
			target.setAttribute('tabindex', '-1');
			target.focus();

			// Because we prevented the default action, we have to update the URL manually.
			window.location.href = url + hash;

			// Prevents jumpbacks from applying focus.
			window.scroll(0, offset);
		}, this.options.timeout);
	}

	/**
	 * Handle click events.
	 * 
	 * @param   {object}  event The event object.
	 * @returns {boolean}       Whether the click fires another function.
	 * @memberof SmoothScroll
	 */
	handleClicks (event) {
		const menu = event.target.closest(this.options.menuSelector),
			target = event.target;

		if (!menu) {
			return false;
		}

		this.smoothScroll(target);
		return true;
	}

	/**
	 * Bind the smooth scroll events.
	 * 
	 * @memberof SmoothScroll
	 */
	bindEvents() {
		// Listen for clicks.
		document.addEventListener('click', () => this.handleClicks(event));
	}
}
