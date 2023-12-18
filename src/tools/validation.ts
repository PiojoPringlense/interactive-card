import { z } from "zod";

export const validationSchema = z.object({
	name: z
		.string({
			required_error: "Cant be blank",
		})
		.min(1, { message: "Can't be blank" }),
	number: z
		.string({
			required_error: "Cant be blank",
		})
		.length(19, { message: "Wrong format, must have 16 digits" })
		.min(1, { message: "Can't be blank" })
		.regex(/^(\d{4} ){3}\d{4}$/, { message: "Wrong format, numbers only" }),
	month: z
		.string({
			required_error: "Cant be blank",
		})
		.regex(/^(0[1-9]|1[0-2])$/, { message: "Must be a valid month (MM)" }),
	year: z
		.string({
			required_error: "Cant be blank",
		})
		.regex(/^\d{2}$/, { message: "Must be a valid year (YY)" }),
	cvc: z
		.string({
			required_error: "Cant be blank",
		})
		.regex(/^\d{3}$/, { message: "Wrong format, must be a 3 digits" }),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
