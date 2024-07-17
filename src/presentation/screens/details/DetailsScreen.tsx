import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, ScrollView} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {Header} from '../../components/movie/Header';
import {MovieDetails} from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  console.log(isLoading);
  return (
    <ScrollView>
      <Header
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};
