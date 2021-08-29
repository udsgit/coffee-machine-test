export const replaceLast = (text: string, search: string, replace: string): string => {
    let newText = text.split("");
    newText[text.lastIndexOf(search)] = replace;
    return newText.join("");
}

