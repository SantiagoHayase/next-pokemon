import axios from "axios";

const pokeApi = axios.create({
  headers: {
    "Accept-Encoding": "gzip",
  },
  baseURL: "https://pokeapi.co/api/v2",
});

export default pokeApi;
