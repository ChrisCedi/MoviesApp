import React from 'react';
import {ImageBackground, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Movie} from '../../../core/entities/movie.entity';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({height = 480, movies}: Props) => {
  return (
    <ImageBackground
      source={require('../../../../assets/poster-background.jpg')}
      style={{width: '100%'}}>
      <View
        style={{
          height,
          paddingTop: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.map(movie => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
