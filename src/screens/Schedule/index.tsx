import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

import colors from '../../styles/colors';

//Solução não recomendada
export default function Schedule({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>
            Schedule 📅
          </Text>
        </View>
      </View>
    </View>
  );
}
