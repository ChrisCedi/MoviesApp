import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'fa57ea5d02f233c75f091b83aa286710',
    api_key: THE_MOVIE_DB_KEY,
  },
});
