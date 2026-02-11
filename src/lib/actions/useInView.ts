export function inView(node: HTMLElement, { threshold = 0.1 } = {}) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.dispatchEvent(new CustomEvent('enterView'));
				observer.unobserve(node);
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
