import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = (galleryItems) => {
    return galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</div>`
}).join('');
};
const finishedMarkup = galleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', finishedMarkup);


new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
