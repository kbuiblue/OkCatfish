import { catsData } from "./data.ts";
import { Cat } from "./Cats.ts";
import { getPagesHTML } from "./utils.ts";
// import { handleTouchStart, handleTouchMove } from "./touchswipe.ts";

const app = document.querySelector(".app") as HTMLDivElement;
const headerContainer = document.querySelector(
    ".header__container"
) as HTMLDivElement;
const image = document.querySelector(".img") as HTMLImageElement;
const bio = document.querySelector(".bio") as HTMLDivElement;
const pages = document.querySelector(".img__pagination") as HTMLDivElement;

const swipeContainer = document.querySelector(
    ".swipe__container"
) as HTMLDivElement;
const like = document.querySelector(".like") as HTMLImageElement;
const likeContainer = document.querySelector(
    ".like__container"
) as HTMLDivElement;
const nope = document.querySelector(".nope") as HTMLImageElement;
const nopeContainer = document.querySelector(
    ".nope__container"
) as HTMLDivElement;

let catsArray: string[] = Object.keys(catsData);
let currentCat = getNewCat();
let initialRender = true;

//TODO: Add multi-cat rendering (2 should be good) with one on top of another to get this effect: https://youtu.be/rB89oJOnCOw

function getNewCat(): Cat | {} {
    const nextCatData = catsData[`${catsArray.shift()}`];
    return nextCatData ? new Cat(nextCatData) : {};
}

likeContainer.addEventListener("click", function () {
    swipeContainer.classList.add("disable");
    swipeRight();
});

nopeContainer.addEventListener("click", function () {
    swipeContainer.classList.add("disable");
    swipeLeft();
});

//TODO: Add proper touch and tracking
// image.addEventListener("touchstart", handleTouchStart, false);
// image.addEventListener("touchmove", handleTouchMove, false);

function swipeRight() {
    if (currentCat instanceof Cat) {
        currentCat.hasBeenLiked = true;
        currentCat.hasBeenSwiped = true;
        transitionState();
    }
}

function swipeLeft() {
    if (currentCat instanceof Cat) {
        currentCat.hasBeenLiked = false;
        currentCat.hasBeenSwiped = true;
        transitionState();
    }
}

function transitionState() {
    if (!(currentCat instanceof Cat)) {
        setTimeout(renderState, 1200);
        setTimeout(resetState, 1300);
        return;
    }
    if (initialRender) {
        renderState();
        currentCat.setImageSource(image);
        initialRender = false;
        return;
    }

    if (currentCat.hasBeenSwiped) {
        if (currentCat.hasBeenLiked) {
            like.style.display = "block";
            app.classList.add("right__swipe");
        } else {
            nope.style.display = "block";
            app.classList.add("left__swipe");
        }

        currentCat = getNewCat();
    }

    setTimeout(() => {
        if (currentCat instanceof Cat) {
            currentCat.setImageSource(image);
        }
    }, 1000);
    setTimeout(renderState, 1700);
    setTimeout(resetState, 1800);
}

function resetState() {
    like.style.display = "none";
    nope.style.display = "none";

    if (!(Object.keys(currentCat).length === 0)) {
        swipeContainer.classList.remove("disable");
    }

    app.classList.remove("left__swipe");
    app.classList.remove("right__swipe");
}

function renderState() {
    if (!(currentCat instanceof Cat)) {
        headerContainer.classList.add("disable");
        app.innerHTML = `
                <div class="blur-background"></div>
                <div class="end-modal">
                <h1>Sign up for <span class="gold-text">Meower Gold</span></h1>
                <h2>Whoops, out of matches! Give us money to find your dream cat date 🤑</h2>
                <div class="buttons">
                    <button class="gold-button">Sign me up!</button>
                    <button class="no-button">Nah, fam</button>
                </div>
               </div>
            `;
        return;
    }

    pages.innerHTML = getPagesHTML(currentCat.images.length);
    bio.innerHTML = currentCat.getBioHtml();
}

transitionState();
