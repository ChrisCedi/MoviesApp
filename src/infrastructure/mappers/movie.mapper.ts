import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {DetailResponse, Result} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      realeseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDBToEntityDetails(movie: DetailResponse): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map(mov => mov.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(mov => mov.name),
    };
  }
}
