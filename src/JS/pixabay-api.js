export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40949290-a05c6a3f26df75971c67ae265';

export const options = {
    params: {
        key: API_KEY,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
    },
};