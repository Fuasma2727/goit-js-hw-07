import { galleryItems } from './gallery-items.js';

// Change code below this line
let galleryUl = document.querySelector("ul.gallery");
let currentLightboxInstance = null;

galleryItems.forEach(function (element) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = element.preview;
  img.dataset.source = element.original;
  li.appendChild(img);
  img.classList.add('gallery__image');
  galleryUl.appendChild(li);
  img.addEventListener('click', function (event) {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" />
    `);
    instance.show();
    currentLightboxInstance = instance;
  });
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27 && currentLightboxInstance) {
    currentLightboxInstance.close();
  }
});



