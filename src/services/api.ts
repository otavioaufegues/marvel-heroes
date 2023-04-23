import axios, { AxiosResponse } from 'axios';
import md5 from 'md5';

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
const PUBLIC_KEY = '7672c5c12c9cf584287a2e2fa4ecb91e';
const PRIVATE_KEY = 'f5dc2edffd2c7e2ceb77abd31545a4b3b002ad0d';

interface Params {
  ts: string;
  apikey: string;
  hash: string;
  limit: number;
  nameStartsWith?: string;
}

export async function getHeroes(text: string): Promise<AxiosResponse> {
  const timestamp = Date.now().toString();
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const params: Params = {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
    limit: 100,
  };

  if (text !== '') {
    params['nameStartsWith'] = text;
  }

  try {
    return await axios.get(BASE_URL, {
      params: params,
    });
  } catch (e) {
    throw handler(e);
  }
}

export function handler(err: any): Error {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty('message'))
    error = err.response.data;
  else if (!err.hasOwnProperty('message')) error = err.toJSON();

  return new Error(error.message);
}
