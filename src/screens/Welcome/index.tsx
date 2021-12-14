import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import Language from '../../../Language';

export default function Welcome({navigation}: {navigation: any}) {
  const language = Language();

  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>{language[0]}</Text>
          <Text style={styles.header_gr}>WeekPlanner</Text>
        </View>
        <Image style={styles.img} source={require('../../assets/fig1.png')} />
        <Text style={styles.msg}>{language[1]}</Text>
        <Pressable
          style={{paddingTop: 35}}
          onPress={() => navigation.navigate('SignUp')}>
          <Icon name="arrow-forward-ios" color={colors.white} size={30} />
        </Pressable>
      </View>
    </View>
  );
}
