import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MoviesTypeResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const moviesTopRatedResponse = await fetcher.get<MoviesTypeResponse>(
      '/top_rated',
    );
    return moviesTopRatedResponse.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching - top rated');
  }
};
