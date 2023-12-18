import { useState } from "react";
import { Card } from "./types";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Done from "./components/Done";

function App() {
	const [card, setCard] = useState<Card>({
		name: "Jane Appleseed",
		number: "0000 0000 0000 0000",
		year: "00",
		month: "00",
		cvc: "000",
	});
	const [isValid, setIsValid] = useState(false);

	return (
		<div className="font-space-grotesk font-medium text-xs small:text-lg min-h-screen grid small:gap-10 small:grid-cols-2">
			<Cards card={card} />
			{!isValid && <Form setCard={setCard} setIsValid={setIsValid} />}
			{isValid && <Done setCard={setCard} setIsValid={setIsValid} />}
		</div>
	);
}

export default App;
