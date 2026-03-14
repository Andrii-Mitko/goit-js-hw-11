import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = event.target.elements.search.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: "Something went wrong",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});