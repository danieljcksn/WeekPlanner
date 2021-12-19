import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import s from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import Language from '../../../Language';

export default function Welcome({navigation}: {navigation: any}) {
  const language = Language();

  return (
    <View style={s.container}>
      <View style={s.rectangle} />
      <View style={s.content}>
        <View style={s.title}>
          <Text style={s.header}>{language[0]}</Text>
          <Text style={s.header_gr}>WeekPlanner</Text>
        </View>

        <Image style={s.img} source={require('../../assets/fig1.png')} />

        <Text style={s.msg}>{language[1]}</Text>

        <Pressable
          style={{paddingTop: 35}}
          onPress={() => navigation.navigate('SignUp')}>
          <Icon name="arrow-forward-ios" color={colors.white} size={30} />
        </Pressable>
      </View>
    </View>
  );
}
