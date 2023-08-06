import { catsData } from "./data.ts";
import { Cat } from "./Cats.ts";
import { getPagesHTML } from "./utils.ts";
import { handleTouchStart, handleTouchMove } from "./touchswipe.ts";

const app = document.getElementById("app") as HTMLDivElement;
const image = document.querySelector(".img") as HTMLImageElement;
const bio = document.querySelector(".bio") as HTMLDivElement;
const pages = document.querySelector(".img__pagination") as HTMLDivElement;
const like = document.querySelector(".nope") as HTMLImageElement;

let catsArray: string[] = Object.keys(catsData);
let currentCat = getNewCat();

function getNewCat(): Cat | {} {
    const nextCatData = catsData[`${catsArray.shift()}`];
    return nextCatData ? new Cat(nextCatData) : {};
}

document
    .querySelector(".like__container")
    ?.addEventListener("click", function () {
        swipeRight();
    });

document
    .querySelector(".nope__container")
    ?.addEventListener("click", function () {
        swipeLeft();
    });

image.addEventListener("touchstart", handleTouchStart, false);
image.addEventListener("touchmove", handleTouchMove, false);

function swipeLeft() {
    currentCat.hasBeenLiked = false;
    currentCat.hasBeenSwiped = true;

    if (catsArray.length > 0) {
        currentCat = getNewCat();
    }

    render();
}

function swipeRight() {
    currentCat.hasBeenLiked = true;
    currentCat.hasBeenSwiped = true;

    if (catsArray.length > 0) {
        currentCat = getNewCat();
    }
    render();
}


//TODO: Set delay for like and nope images
function render() {
    if (currentCat.hasBeenLiked) {
        like.style.visibility = "visible";
    } else {
        like.style.visibility = "hidden";
    }

    if (currentCat.hasBeenSwiped) {
        app.innerHTML = `
            <div>Whoops, we ran out of matches!</div>
        `;
    }

    pages.innerHTML = getPagesHTML(currentCat.images.length);
    bio.innerHTML = currentCat.getBioHtml();
    currentCat.setImageSource(image);
}

render();

// setTimeout(swipeRight, 3000);
// setTimeout(swipeLeft, 6000);
// setTimeout(swipeRight, 9000);
// setTimeout(swipeRight, 12000);
