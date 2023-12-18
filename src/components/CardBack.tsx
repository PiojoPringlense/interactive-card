import { Card } from "../types";
import cardBack from "../assets/bg-card-back.png";

type Props = { card: Card };

export default function CardBack({ card }: Props) {
	return (
		<div className="col-start-3 col-end-5 row-start-2 row-end-5 small:row-start-4 small:row-end-5 small:col-start-3 small:col-end-6">
			<div className="relative">
				<img src={cardBack} alt="Credit card back" className="w-[285px] small:w-[447px]" />
				<span className={`text-white  absolute top-[44%] right-[13%]`}>{card.cvc}</span>
			</div>
		</div>
	);
}
