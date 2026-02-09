export function isAdult(birthDate: Date): boolean {
	const today = new Date();
	const adultDate = new Date(birthDate);
	adultDate.setFullYear(adultDate.getFullYear() + 18);
	return today >= adultDate;
}
