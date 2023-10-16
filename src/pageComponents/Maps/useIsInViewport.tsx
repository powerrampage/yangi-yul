import { useEffect, useRef, useState, useMemo, MutableRefObject, RefObject } from 'react';

export default function useIsInViewport(ref: RefObject<Element>) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

	useEffect(() => {
		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
}
