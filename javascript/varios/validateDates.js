function validateInputDates(selectorStart, selectorEnd) {
	const dateStart = $(selectorStart).val();
	const dateEnd = $(selectorEnd).val();
	if (dateStart == '' || dateEnd == '') {
		return false;
	}
	if (Date.parse(dateEnd) < Date.parse(dateStart)) {
		return false;
	}
	return true;
}
