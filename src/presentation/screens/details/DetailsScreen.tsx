import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {Header} from '../../components/movie/Header';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {FullScreenView} from '../../components/loaders/FullScreenView';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie, castData} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenView />;
  }

  return (
    <ScrollView>
      <Header
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={castData!} />
    </ScrollView>
  );
};
