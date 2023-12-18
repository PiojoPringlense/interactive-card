import { useEffect, useState } from "react";

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return { innerWidth: windowSize.innerWidth };
}
