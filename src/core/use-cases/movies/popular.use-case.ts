import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MoviesTypeResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<MoviesTypeResponse>('/popular');
    return popularMovies.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - popular');
  }
};
