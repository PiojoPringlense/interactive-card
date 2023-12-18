export function formatCardNumber(input: string): string {
	const cleanedInput = input.replace(/\s/g, "");
	const groups = cleanedInput.match(/.{1,4}/g);
	if (groups) {
		return groups.slice(0, 4).join(" ");
	}
	return "";
}
