import { Card } from "../types";
import InconComplete from "./../assets/icon-complete.svg";

type Props = {
	setCard: React.Dispatch<React.SetStateAction<Card>>;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Done({ setCard, setIsValid }: Props) {
	function handleClick() {
		setCard({
			name: "Jane Appleseed",
			number: "0000 0000 0000 0000",
			year: "00",
			month: "00",
			cvc: "000",
		});
		setIsValid(false);
	}

	return (
		<div className="grid small:items-center items-start p-6 max-w-sm mx-auto small:mx-[initial]">
			<div className="flex flex-col items-center gap-6">
				<img src={InconComplete} alt="Completed" />
				<p className="text-center text-[28px] mt-4">THANK YOU!</p>
				<p className="text-center text-neutral-dark mb-4">We've added your card details</p>
				<button
					onClick={handleClick}
					className="bg-neutral-veryDark self-stretch text-white hover:bg-neutral-dark focus-visible:bg-neutral-dark rounded-md p-5 mt-3">
					Continue
				</button>
			</div>
		</div>
	);
}
