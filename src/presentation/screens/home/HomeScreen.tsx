import React from 'react';
import {View, ScrollView} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenView} from '../../components/loaders/FullScreenView';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenView />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={popular}
          title="populares"
          loadNextPage={() => popularNextPage()}
        />
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
