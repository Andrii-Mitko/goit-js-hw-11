import { refs } from "../main";

refs.input.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = new FormData(e.target);

  getImagesByQuery(query);
});

const getImagesByQuery = (query) => {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
};