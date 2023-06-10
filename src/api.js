import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_NwvpvYwRpl5OnS2uqOCBBnLgtjvdaSmzFfLn1jguXPtgoDLCbGJxoeZhti9ZCSvm';

export const fetchBreeds = async abortCtrl => {
  const response = await axios.get('/breeds', {
    signal: abortCtrl.signal,
  });
  return response.data;
};

export const fetchDogByBreed = async ({ breedId, abortCtrl }) => {
  const response = await axios.get('/images/search', {
    signal: abortCtrl.signal,
    params: {
      breed_id: breedId,
    },
  });
  return response.data[0];
};
