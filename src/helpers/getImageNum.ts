

export const getImageNum = (img: string) => {
    let newImg = img.split('-');

    return parseInt(newImg[1]);
}