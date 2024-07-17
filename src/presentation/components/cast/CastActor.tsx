import React from 'react';
import {View, Text, Image} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={{marginHorizontal: 5, width: 110}}>
      <Image
        source={{uri: actor.avatar}}
        height={150}
        width={110}
        style={{borderRadius: 10}}
      />
      <View style={{display: 'flex'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', paddingVertical: 5}}>
          {actor.name}
        </Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};
