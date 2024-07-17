import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {DetailResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {FullMovie} from '../../entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const getByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    //fetcher
    const movieDetail = await fetcher.get<DetailResponse>(`/${movieId}`);
    //mappeo
    return MovieMapper.fromMovieDBToEntityDetails(movieDetail);
  } catch (error) {
    throw new Error('Cannot get movie by id');
  }
};
