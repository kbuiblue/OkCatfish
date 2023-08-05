import { Cat, Cats, catsData } from "./data.ts";

const image = document.querySelector(".img") as HTMLImageElement;
const bio = document.querySelector(".bio") as HTMLDivElement;
// const pages = document.querySelector(".img__pagination") as HTMLDivElement;

let catsArray: string[] = Object.keys(catsData);

function render() {

    if (image && bio) {
        image.src = `${catsData.nana.avatar}`;

        const nameAndAge = document.createElement("h1");
        nameAndAge.textContent = `${catsData.nana.name}, ${catsData.nana.age}`;
        bio.append(nameAndAge);

        const intro = document.createElement("h2");
        intro.textContent = `${catsData.nana.intro}`;
        bio.append(intro);
    }
}

render();
