import React from 'react';
import {View, Text} from 'react-native';
import s from './styles';

//Solução não recomendada
export default function Profile() {
  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.title}>
          <Text style={s.header}>Profile 👨</Text>
        </View>
      </View>
    </View>
  );
}
