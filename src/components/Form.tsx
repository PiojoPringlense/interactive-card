import { Card } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationSchema, validationSchema } from "../tools/validation";
import { ChangeEvent } from "react";
import { formatCardNumber } from "../tools/formatCardNumber";

type Props = {
	setCard: React.Dispatch<React.SetStateAction<Card>>;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setCard, setIsValid }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<ValidationSchema>({
		resolver: zodResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<ValidationSchema> = () => setIsValid(true);

	const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "") {
			setCard((card) => ({ ...card, number: "0000 0000 0000 0000" }));
			return;
		}
		const formatedCardNumber = formatCardNumber(value);
		setValue("number", formatedCardNumber);
		setCard((card) => ({ ...card, number: formatedCardNumber }));
	};

	const onMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "") {
			setCard((card) => ({ ...card, month: "00" }));
			return;
		}
		const formatedCardMonth = value.slice(0, 2);
		setValue("month", formatedCardMonth);
		setCard((card) => ({ ...card, month: formatedCardMonth }));
	};

	const onYearChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "") {
			setCard((card) => ({ ...card, year: "00" }));
			return;
		}
		const formatedCardYear = value.slice(0, 2);
		setValue("year", formatedCardYear);
		setCard((card) => ({ ...card, year: formatedCardYear }));
	};

	const onCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "") {
			setCard((card) => ({ ...card, cvc: "000" }));
			return;
		}
		const formatedCardCvc = value.slice(0, 3);
		setValue("cvc", formatedCardCvc);
		setCard((card) => ({ ...card, cvc: formatedCardCvc }));
	};

	return (
		<div className="grid small:items-center items-start p-6 max-w-sm mx-auto small:mx-[initial]">
			<form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-1">
					<label className="text-[11px] uppercase" htmlFor="name">
						CARHOLDER NAME
					</label>
					<div className="gradient-border rounded-md">
						<input
							className={`border rounded-md py-3 px-4 bg-white w-full focus-within:m-[2px] focus-within:w-[calc(100%-4px)] focus-within:h-[calc(100%-4px)] focus-within:outline-none focus-within:px-[14px] ${
								errors.name ? "border-inputError border-2" : ""
							}`}
							type="text"
							id="name"
							placeholder="e.g. Jane Appleseed"
							autoComplete="off"
							{...register("name", {
								onChange: (e) => setCard((card) => ({ ...card, name: e.target.value })),
							})}
						/>
					</div>
					<span className="text-[11px] text-inputError leading-none h-4">
						{errors.name && errors.name.message}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<label className="text-[11px] uppercase" htmlFor="number">
						CARD NUMBER
					</label>
					<div className="gradient-border rounded-md">
						<input
							className={`border rounded-md py-3 px-4 bg-white w-full focus-within:m-[2px] focus-within:w-[calc(100%-4px)] focus-within:h-[calc(100%-4px)] focus-within:outline-none focus-within:px-[14px] ${
								errors.number ? "border-inputError border-2" : ""
							}`}
							type="text"
							id="number"
							placeholder="e.g. 1234 5678 9123 0000"
							{...register("number", {
								onChange: onNumberChange,
							})}
						/>
					</div>
					<span className="text-[11px] text-inputError leading-none h-4">
						{errors.number && errors.number.message}
					</span>
				</div>
				<div className="flex gap-5">
					<div className="flex flex-col gap-1">
						<label className="text-[11px] uppercase whitespace-nowrap" htmlFor="date">
							EXP. DATE (MM/YY)
						</label>
						<div className="flex items-center gap-1">
							<div className="gradient-border rounded-md  max-w-[90px]">
								<input
									className={`border rounded-md py-3 px-4  w-full bg-white  focus-within:m-[2px] focus-within:w-[calc(100%-4px)] focus-within:h-[calc(100%-4px)] focus-within:outline-none focus-within:px-[14px] ${
										errors.month ? "border-inputError border-2" : ""
									}`}
									type="string"
									id="month"
									placeholder="MM"
									{...register("month", {
										onChange: onMonthChange,
									})}
								/>
							</div>
							<div className="gradient-border rounded-md  max-w-[90px]">
								<input
									className={`border rounded-md py-3 px-4  w-full bg-white focus-within:m-[2px] focus-within:w-[calc(100%-4px)] focus-within:h-[calc(100%-4px)] focus-within:outline-none focus-within:px-[14px] ${
										errors.year ? "border-inputError border-2" : ""
									}`}
									type="string"
									id="year"
									placeholder="YY"
									{...register("year", {
										onChange: onYearChange,
									})}
								/>
							</div>
						</div>
						<span className="text-[11px] text-inputError leading-none h-4">
							{errors.month && errors.month.message}
							{errors.year && errors.year.message}
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-[11px] uppercase" htmlFor="number">
							CVC
						</label>
						<div className="gradient-border rounded-md">
							<input
								className={`border rounded-md py-3 px-4 w-full bg-white focus-within:m-[2px] focus-within:w-[calc(100%-4px)] focus-within:h-[calc(100%-4px)] focus-within:outline-none focus-within:px-[14px] ${
									errors.cvc ? "border-inputError border-2" : ""
								}`}
								type="string"
								id="cvc"
								placeholder="e.g. 123"
								{...register("cvc", {
									onChange: onCvcChange,
								})}
							/>
						</div>
						<span className="text-[11px] text-inputError leading-none h-4">
							{errors.cvc && errors.cvc.message}
						</span>
					</div>
				</div>
				<button className="bg-neutral-veryDark text-white hover:bg-neutral-dark focus-visible:bg-neutral-dark rounded-md p-5 mt-3">
					Confirm
				</button>
			</form>
		</div>
	);
}
