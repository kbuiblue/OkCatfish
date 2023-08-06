export class Cat {
    [key: string]: any;

    constructor(catsData: any) {
        Object.assign(this, catsData);

        this.currentPageIndex = 0;
        this.newPageIndex = this.currentPageIndex;
    }

    setImageSource = (imageElement: HTMLImageElement) => {
        imageElement.src = this.images[this.currentPageIndex];
    };

    updatePageIndex = () => {
        
    }

    updateCurrentPageHtml = (imageSource: string) => {
        const imagesArray = this.images;

        if (imagesArray.indexOf(imageSource) === this.newPageIndex) {
            document
                .querySelector(`[data-index = "${this.newPageIndex}"]`)
                ?.classList.add("current__page");

            document
                .querySelector(`[data-index = "${this.currentPageIndex}"]`)
                ?.classList.remove("current__page");
        }
    };

    getBioHtml = () => {
        const { name, age, intro } = this;

        return `
            <div class="bio">
                <h1>${name}, ${age}</h1>
                <h2>${intro}</h2>
            </div>
        `;
    };
}
