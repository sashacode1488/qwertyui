// redirect.js
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

window.onload = function() {
    // Check if user has already bypassed the mobile check
    if (!sessionStorage.getItem('bypassMobileCheck')) {
        if (isMobileDevice()) {
            window.location.href = "unsupported.html";
        }
    }
}
