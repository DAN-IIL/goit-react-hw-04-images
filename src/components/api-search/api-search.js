import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api//';
const API_KEY = '34821763-cd0390e9b5fa3f24bbb43d369';

const requestParameters = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 12,
};

async function getApiResponse(searchTerm) {
  requestParameters.q = searchTerm;

  try {
    const response = await axios.get(BASE_URL, { params: requestParameters });
    const images = response.data;

    const pagesAmount = Math.ceil(
      images.totalHits / requestParameters.per_page
    );

    if (requestParameters.page === pagesAmount || pagesAmount === 0) {
      requestParameters.page = 1;
    } else {
      requestParameters.page += 1;
    }

    return images;
  } catch (error) {
    console.log(error);
  }
}

export { getApiResponse, requestParameters };
