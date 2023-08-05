import { Cat, Cats, catsData } from "./data.ts";

function Catz(this: Cat, catsData: Cats) {
    Object.assign(this, catsData);

    // this.getAvatarHtml = function () {
    //     if(this.avatar)
    // }
}
