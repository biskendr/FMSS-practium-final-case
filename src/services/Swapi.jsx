import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Swapi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    format: 'json',
  },
});

export const getEndpointUrl = (endpoint) => {
  return Swapi.getUri({
    url: `${endpoint}`,
  });
};
