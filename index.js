const allImages = document.querySelectorAll("img.imgItem");
const allImagesSizes = [];

function assignSrcToAllImages() {
  for (let index = 0; index < allImages.length; index++) {
    allImages[index].setAttribute("src", `./src/imgFeed/img${index + 1}.jpg`);
  }

  for (let index = 0; index < allImages.length; index++) {
    allImages[index].setAttribute("onload", `calculateImg(${index})`);
  }
}

assignSrcToAllImages();
