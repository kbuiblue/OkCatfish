//@ts-ignore
import { cats } from "/src/data.ts";

const image = document.querySelector(".img") as HTMLImageElement;

function renderImage() {
    if (image) {
        image.src = `${cats.nana.avatar}`;
    }
}

renderImage()