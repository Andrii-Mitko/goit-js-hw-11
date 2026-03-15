import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55026716-4dbe0fcfc8dcb0cc6e29137c8";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    lang: 'ru',
    image_type: "photo",
    orientation: "horizontal",
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}