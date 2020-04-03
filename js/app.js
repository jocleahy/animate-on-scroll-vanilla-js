// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait = 20, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}




// select all images with the animate class
const aniImgs = document.querySelectorAll('.can-animate');

function scrollCheck(e) {
    aniImgs.forEach(aniImg => {
        // calc bottom of viewport
        const viewBot = window.innerHeight + window.scrollY;

        // calc when img comes into view
        // will add active class
        const inView = viewBot - aniImg.height / 3

        // calc bottom of image from top of page
        // will remove animation active class
        const imgBot = aniImg.offsetTop + aniImg.height;

        // when inView is greater than the top of image from page
        const canAnimate = inView > aniImg.offsetTop;

        // done when Ypos is less than imgBot
        const aniPast = window.scrollY < imgBot;

        if (canAnimate && aniPast) {
            aniImg.classList.add('active');
        } else {
            aniImg.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', debounce(scrollCheck));

