import React from 'react';
import {View, Text} from 'react-native';
import s from './styles';

export default function Notifications() {
  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.title}>
          <Text style={s.header}>Notifications 🔔</Text>
        </View>
      </View>
    </View>
  );
}
