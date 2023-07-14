import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '34934818-9a58b99072f8bb0bce42e5818',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const searchPhoto = async (q, page = 1) => {
  const { data } = await instance.get(`/`, {
    params: {
      q,
      page,
    },
  });
  return data;
};
