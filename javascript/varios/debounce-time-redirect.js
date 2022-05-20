window.addEventListener('load', function () {
    const logoutTime = 3000; /* in milliseconds */
    let debounceTimer;

    document.addEventListener('mousemove', (event) => {
        debounce(triggerLogoutEvent, logoutTime)
    }, false);

    document.addEventListener('keyup', (event) => {
        debounce(triggerLogoutEvent, logoutTime)
    }, false);

    const debounce = (callback, time) => {
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(callback, time);
    };

    const triggerLogoutEvent = () => {
        /* In this case we use to logout. We can anythings . . . */
        window.location = 'https://example-path/logout';
    }
});
