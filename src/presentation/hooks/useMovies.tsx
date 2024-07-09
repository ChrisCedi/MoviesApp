import {useState, useEffect} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
let popularPage = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlayin] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        UseCases.moviesNowPlaingUseCase(movieDBFetcher),
        UseCases.moviesUpcomingUseCase(movieDBFetcher),
        UseCases.moviesTopRatedUseCase(movieDBFetcher),
        UseCases.moviesPopularUseCase(movieDBFetcher),
      ]);

    setIsLoading(false);
    setNowPlayin(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);

    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPage++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPage,
    });

    setPopular(prev => [...prev, ...popularMovies]);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    topRated,
    popularNextPage,
  };
};
