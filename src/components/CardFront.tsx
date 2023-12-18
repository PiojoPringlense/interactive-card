import { Card } from "../types";
import cardFront from "../assets/bg-card-front.png";

type Props = { card: Card };

export default function CardFront({ card }: Props) {
	return (
		<div className="relative col-start-2 col-end-4 row-start-3 row-end-6 small:row-start-2 small:row-end-3 small:col-start-2 small:col-end-5">
			<div className="relative">
				<img src={cardFront} className="w-[285px] small:w-[447px]" alt="Credit card front" />

				<span
					className={`absolute top-[11%] left-[7.4%] aspect-square rounded-full bg-white h-[19%]`}></span>
				<span
					className={`absolute top-[16.3%] left-[21.25%] aspect-square rounded-full border border-white h-[8.5%]`}></span>

				<span className={`text-white  absolute bottom-[11.8%] left-[7.4%]`}>{card.name}</span>
				<span
					className={`text-white text-[22px] small:text-[32px] absolute bottom-[31.8%] left-[7.4%]`}>
					{card.number}
				</span>
				<span className={`text-white  absolute bottom-[11.8%] right-[13%]`}>
					{card.month}/{card.year}
				</span>
			</div>
		</div>
	);
}
