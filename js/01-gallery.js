// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemEl = galleryItems
  .map(
    (item) =>
      //   `<div class="gallery__item">
      //         <a class="gallery__link" href=${item.original} onclick="return false;">
      //         <img class="gallery__image" src=${item.preview} data-source=${item.original} alt='${item.description}'></a>
      //     </div> `
      `<div class="gallery__item">
    <a class="gallery__link" href=${item.original} onclick="return false;">
    <img class="gallery__image" src=${item.preview} alt='${item.description}' title='${item.description}'/></a>
    
</div>
          `
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", itemEl);

//   var lightbox = new SimpleLightbox(".gallery__item a", {});
// import SimpleLightbox from "simplelightbox";

const simplelightbox = require("simplelightbox");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
