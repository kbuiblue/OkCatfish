let xDown = null;
let yDown = null;

export function getTouches(evt) {
    return (
        evt.touches || // browser API
        evt.originalEvent.touches
    ); // jQuery
}

export function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

export function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        console.log(xDiff);
        /*most significant*/
        if (xDiff > 7) {
            /* right swipe */

            console.log("Left swipe");
        } else if (xDiff < -7) {
            /* left swipe */
            console.log("Right swipe");
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
            console.log("Up swipe");
        } else {
            /* up swipe */
            console.log("Down swipe");
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
