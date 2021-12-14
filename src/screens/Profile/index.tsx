import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

//Solução não recomendada
export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>Profile 👨</Text>
        </View>
      </View>
    </View>
  );
}
