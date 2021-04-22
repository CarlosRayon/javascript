/* Event to radio */

var radios = document.querySelectorAll('input[type=radio][name="contact"]')
radios.forEach((radio) => radio.addEventListener('change', () => alert(radio.value)))
