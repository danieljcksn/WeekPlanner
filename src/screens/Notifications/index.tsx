import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

import colors from '../../styles/colors';

//Solução não recomendada
export default function Notifications({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>
            Notifications 🔔
          </Text>
        </View>
      </View>
    </View>
  );
}
