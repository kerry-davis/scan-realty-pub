import axios from 'axios';

export const baseUrl = process.env.REACT_APP_BASEURL

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    },
  });

  return data;
};
