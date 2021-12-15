import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import styles from './styles';

//Solução não recomendada
export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>Settings 🔧</Text>
        </View>
        <Icon name="language" color={colors.black} size={30}/>
      </View>
    </View>
  );
}
