import { Card } from "../types";
import { useWindowSize } from "../tools/useWindowsSize";
import { BREAKPOINT } from "../tools/consts";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

type Props = { card: Card };

export default function Cards({ card }: Props) {
	const { innerWidth } = useWindowSize();

	const src =
		innerWidth > BREAKPOINT
			? "bg-[url('./bg-main-desktop.png')]"
			: "bg-[url('./bg-main-mobile.png')]";

	return (
		<div className="grid grid-cols-[minmax(16px,1fr)_57px_auto_57px_minmax(16px,1fr)] grid-rows-[minmax(32px,1fr)_26vw_auto_52px_42px_minmax(32px,1fr)] small:grid-cols-[minmax(16px,1fr)_94px_auto_128px_94px_minmax(16px,1fr)] small:grid-rows-[minmax(32px,1fr)_auto_36px_auto_minmax(32px,1fr)]">
			<div
				className={`col-span-full row-start-1 row-end-5 small:col-start-1 small:col-end-4 small:row-span-full bg-cover ${src}`}
			/>
			<CardBack card={card} />
			<CardFront card={card} />
		</div>
	);
}
