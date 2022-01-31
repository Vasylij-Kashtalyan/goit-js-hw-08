// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryEll = document.querySelector('.gallery');

const createGalleryCard = galleryItems.map(({ preview, original, description }) => {
  return`<a class="gallery__item" href="${original}" >
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}).join('');

galleryEll.insertAdjacentHTML("beforeend", createGalleryCard);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionPosition: `bottom`,
    captionDelay: `230`
});