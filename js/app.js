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
window.addEventListener('scroll', scrollCheck);

