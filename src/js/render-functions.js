import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="card">
          <a class="card-link" href="${largeImageURL}">
            <img
              class="card-image"
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}"
            />
          </a>
          <ul class="card-body">
            <li class="card-body-item"><p class="card-body-title">likes</p><p class="card-body-text">${likes}</p></li>
            <li class="card-body-item"><p class="card-body-title">views</p><p class="card-body-text">${views}</p></li>
            <li class="card-body-item"><p class="card-body-title">comments</p><p class="card-body-text">${comments}</p></li>
            <li class="card-body-item"><p class="card-body-title">downloads</p><p class="card-body-text">${downloads}</p></li>
          </ul>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
