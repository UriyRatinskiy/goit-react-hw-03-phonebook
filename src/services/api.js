import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
const imagesAPI = axios.create({
  baseURL: 'https://pixabay.com/api',
});
const API_KEY = '35668361-6ed5c81517d8d0bc1dc269174';

export const fetchImages = async (searchQuery, searchPage = 1) => {
  const response = await imagesAPI.get(
    '/?image_type=photo&orientation=horizontal',
    {
      params: {
        q: searchQuery,
        page: searchPage,
        key: API_KEY,
        per_page: 12,
      },
    }
  );

  return response.data.hits;
};

const api = {
  fetchImages,
};

export default api;
