import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = (galleryItems) => {
    return galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');
};
const finishedMarkup = galleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', finishedMarkup);

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show()

    window.addEventListener('keydown', onCloseModal);

    function onCloseModal(evt) {
        if (evt.code === 'Escape') {
            instance.close()
            window.removeEventListener('keydown', onCloseModal);
    }
    };
};