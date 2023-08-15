import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://gleaming-wear-tick.cyclic.cloud/",
});

export default instance;
