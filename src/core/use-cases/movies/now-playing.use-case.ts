import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MoviesTypeResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesNowPlaingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<MoviesTypeResponse>('/now_playing');
    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - nowPlaying');
  }
};
