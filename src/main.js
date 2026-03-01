import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  enableLoadMoreButton,
  disableLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.js-load-more');

const per_page = 15;

let page = 1;
let query = '';
let totalPage = 0;

form.addEventListener('submit', submitHendler);
loadMore.addEventListener('click', loadMoreHamdler);

async function submitHendler(event) {
  event.preventDefault();

  const { 'search-text': searchInput } = event.target.elements;
  query = searchInput.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  if (page !== 1) {
    page = 1;
  }

  try {
    const data = await getImagesByQuery(query, page);

    const images = data.hits;

    if (images.length === 0) {
      showErrorMsg(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    totalPage = Math.ceil(data.totalHits / per_page);

    createGallery(images);

    if (page < totalPage) {
      showLoadMoreButton();
    }

    form.reset();
  } catch (error) {
    showErrorMsg(error.message);
  } finally {
    hideLoader();
  }
}

async function loadMoreHamdler() {
  page++;
  disableLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    if (page >= totalPage) {
      hideLoadMoreButton();
      showErrorMsg(
        "We're sorry, but you've reached the end of search results."
      );
    }

    const card = document.querySelector('.card');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    showErrorMsg(error.message);
  } finally {
    enableLoadMoreButton();
  }
}

function showErrorMsg(msg) {
  iziToast.show({
    message: `${msg}`,
    messageColor: '#FFFFFF',
    backgroundColor: '#ef4040',
    position: 'topRight',
    timeout: 3000,
    closeOnClick: true,
    drag: false,
    pauseOnHover: false,
    close: false,
    progressBar: false,
    animateInside: false,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
    maxWidth: '432px',
  });
}
