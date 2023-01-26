document.getElementById('field').addEventListener('change', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        console.log('radio');
    }

    if (event.target && event.target.matches("input[type='checkbox']")) {
        console.log('checkbox');
    }
});
