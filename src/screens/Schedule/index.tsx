import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

//Solução não recomendada
export default function Schedule() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>Schedule 📅</Text>
        </View>
      </View>
    </View>
  );
}
