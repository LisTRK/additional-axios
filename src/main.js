// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { clearGalleryList, renderGalleryList } from './js/render-functions';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = formEl.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.info({
      message: 'wrong!',
    });
    return;
  }
  showLoader();
  clearGalleryList();
  getImages(inputValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderGalleryList(hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}

function showLoader() {
  loaderEl.classList.remove('hidden');
}

function hideLoader() {
  loaderEl.classList.add('hidden');
}
