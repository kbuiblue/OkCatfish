export function getPagesHTML(numOfPages: number) {
    let pageIndex = 0;

    if (numOfPages > 1) {
        return new Array(numOfPages)
            .fill(0)
            .map(() => `<div class ="page ${pageIndex === 0 ? "current__page" : ""}" data-index="${pageIndex++}"></div>`)
            .join("");
    } else {
        return "";
    }
}
